/**
 * Storybook/Vite: `react-native` is aliased here instead of directly to `react-native-web`
 * so named exports that exist in RN but not in RN-web (e.g. TurboModuleRegistry) still resolve.
 */
export * from "react-native-web";

export const TurboModuleRegistry = {
  get(name?: string): undefined {
    // #region agent log
    fetch('http://127.0.0.1:7769/ingest/86ce510d-47a5-420b-b9f1-96e82fa7aa3d',{method:'POST',headers:{'Content-Type':'application/json','X-Debug-Session-Id':'32d16a'},body:JSON.stringify({sessionId:'32d16a',location:'rn-web-shim.ts:TurboModuleRegistry.get',message:'TurboModuleRegistry.get called',data:{moduleName:name,stack:new Error().stack?.split('\n').slice(0,5)},timestamp:Date.now(),hypothesisId:'B'})}).catch(()=>{});
    // #endregion
    return undefined;
  },
  getEnforcing(_name: string): undefined {
    // #region agent log
    fetch('http://127.0.0.1:7769/ingest/86ce510d-47a5-420b-b9f1-96e82fa7aa3d',{method:'POST',headers:{'Content-Type':'application/json','X-Debug-Session-Id':'32d16a'},body:JSON.stringify({sessionId:'32d16a',location:'rn-web-shim.ts:TurboModuleRegistry.getEnforcing',message:'TurboModuleRegistry.getEnforcing called',data:{moduleName:_name},timestamp:Date.now(),hypothesisId:'B'})}).catch(()=>{});
    // #endregion
    return undefined;
  },
};
