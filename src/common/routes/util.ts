export function injectWalletIdIntoUrl(urls: string, walletId: string): string {
  const target = ':walletId';
  if (!urls.includes(target)) return urls;
  return urls.replace(target, walletId);
}

export function getLastPathSegment(url: string): string {
  const segments = url.split('/').filter(Boolean);
  return segments[segments.length - 1] || '';
}
