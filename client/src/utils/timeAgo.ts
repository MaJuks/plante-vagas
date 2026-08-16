export function timeAgo(dateString: string) {
  const diffMs = Date.now() - new Date(dateString).getTime();
  const hours = Math.max(1, Math.floor(diffMs / (1000 * 60 * 60)));
  if (hours < 24) return `${hours} hora${hours > 1 ? "s" : ""}`;
  const days = Math.floor(hours / 24);
  return `${days} dia${days > 1 ? "s" : ""}`;
}
