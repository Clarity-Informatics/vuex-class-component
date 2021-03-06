import { Store } from "vuex";

export interface VuexModuleOptions {
  /*
   * Takes a namespacedPath.
   * Defines wether the module should be namespaced or not.
   * If a string the module will be namespaced and the value will be the namespaced path
   */
  namespaced ?:string;
  target ?:"nuxt";
  enableLocalWatchers ?:boolean | string;
  strict ?:boolean;
}

export interface VuexModuleAddons {
  $store :Store<any>
}

export interface VuexModule extends VuexModuleAddons {}
export class VuexModule {
  public static With( options ?:VuexModuleOptions ) {
    return VuexModule
  }
}

export type VuexModuleConstructor = typeof VuexModule & VuexModuleInternals;

export interface VuexModuleInternals {
  prototype :VuexModuleInternalsPrototype
}

export interface VuexModuleInternalsPrototype {
  __options__ :VuexModuleOptions | undefined;
  __namespacedPath__ :string;
  __vuex_module_cache__ :undefined | { [ path: string ]: VuexObject };
  __vuex_proxy_cache__ :{} | undefined;
  __vuex_local_proxy_cache__ :{} | undefined;
  __submodules_cache__: Map;
  __context_store__: Map | undefined;
  __mutations_cache__: {
    __explicit_mutations__: {},
    __setter_mutations__: {},
  } | undefined;
  __explicit_getter_names__ :string[];
  __decorator_getter_names__ :string[] | undefined;
  __explicit_mutations_names__: string[],
  __actions__: {
    __name__ :string,
    __type__ :ActionType,
  }[] | undefined,
  __watch__ :Map;
  __store_cache__ :any;
}

export interface SubModuleType<T> {
  __submodule_type__ :"submodule";
  __submodule_class__ :T
}

export type DictionaryField = string | number | symbol

export interface VuexObject {
  namespaced :boolean | undefined;
  state :Map | Function;
  mutations :Map
  getters :Map
  actions :Map
  modules :Record<DictionaryField, VuexObject>  
}

export type Map = Record<DictionaryField, any>

export interface FieldPayload { 
  field :string;
  payload :any;
}

export type MutationDescriptor = TypedPropertyDescriptor<(payload?:any) => void>

export type ActionType = "raw" | "mutate";

export type ActionOption = {
  mode? :ActionType
}

export type ActionDescriptor = TypedPropertyDescriptor<(payload?:any) => Promise<any>>

export interface ProxyWatchers {

  $watch ( 
    getterField :string,
    callback :(( newVal :string, oldVal :string) => void) | object,
    options? :{ deep :boolean, immediate :boolean }
  ) :() => void 

  $subscribe (
    mutationfield :string,
    callback :( payload :any ) => void,
  ) :() =>void

  $subscribeAction ( actionField :string, callbackOrObj :SubScribeActionCallback | SubScribeActionObject ) :() =>void

}

type SubScribeActionCallback = ( payload :any ) => void;

type SubScribeActionObject = {
  before: ( payload :any ) => void;
  after: ( payload :any ) => void;
}