/**
 * Minimal stub for Storybook (web): Metro injects the real registry in RN apps.
 * @see @react-native/assets-registry/registry
 */
const assets = [];

export function registerAsset(asset) {
  return assets.push(asset);
}

export function getAssetByID(assetId) {
  return assets[assetId - 1];
}
