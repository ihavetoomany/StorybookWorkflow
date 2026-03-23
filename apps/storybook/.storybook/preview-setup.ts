/**
 * @expo/vector-icons → expo-font → expo-modules-core expects `globalThis.expo` (see EventEmitter.ts).
 * Without Expo's runtime, install the official web polyfill before any story imports Expo modules.
 */
import { installExpoGlobalPolyfill } from "expo-modules-core/src/polyfill/dangerous-internal";

installExpoGlobalPolyfill();

// #region agent log
fetch('http://127.0.0.1:7769/ingest/86ce510d-47a5-420b-b9f1-96e82fa7aa3d',{method:'POST',headers:{'Content-Type':'application/json','X-Debug-Session-Id':'32d16a'},body:JSON.stringify({sessionId:'32d16a',location:'preview-setup.ts:polyfill',message:'Polyfill installed',data:{hasExpo:!!globalThis.expo,hasModules:!!globalThis.expo?.modules,moduleKeys:Object.keys(globalThis.expo?.modules??{}),hasExpoDomWebView:typeof (globalThis as any).ExpoDomWebView},timestamp:Date.now(),hypothesisId:'E'})}).catch(()=>{});
// #endregion

// #region agent log
setTimeout(() => {
  fetch('http://127.0.0.1:7769/ingest/86ce510d-47a5-420b-b9f1-96e82fa7aa3d',{method:'POST',headers:{'Content-Type':'application/json','X-Debug-Session-Id':'32d16a'},body:JSON.stringify({sessionId:'32d16a',location:'preview-setup.ts:deferred',message:'Deferred state check',data:{hasExpo:!!globalThis.expo,moduleKeys:Object.keys(globalThis.expo?.modules??{}),hasExpoFontLoader:!!globalThis.expo?.modules?.ExpoFontLoader},timestamp:Date.now(),hypothesisId:'A'})}).catch(()=>{});
}, 3000);
// #endregion

// #region agent log
const origError = window.Error;
const origConsoleError = console.error;
window.addEventListener('error', (evt) => {
  if (evt.message?.includes('ExpoFontLoader') || evt.message?.includes('native module')) {
    fetch('http://127.0.0.1:7769/ingest/86ce510d-47a5-420b-b9f1-96e82fa7aa3d',{method:'POST',headers:{'Content-Type':'application/json','X-Debug-Session-Id':'32d16a'},body:JSON.stringify({sessionId:'32d16a',location:'preview-setup.ts:errorCapture',message:'ExpoFontLoader error caught',data:{errorMsg:evt.message,filename:evt.filename,lineno:evt.lineno,colno:evt.colno,stack:evt.error?.stack?.split('\n').slice(0,8)},timestamp:Date.now(),hypothesisId:'A'})}).catch(()=>{});
  }
});
// #endregion
