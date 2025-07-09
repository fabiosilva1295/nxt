export const getHoursDiffBetweenDates = function (createdAt: string, targetIso: string): number {
  const createdDate = new Date(createdAt);
  const targetDate = new Date(targetIso);

  const diffMs = targetDate.getTime() - createdDate.getTime();
  const diffHours = diffMs / (1000 * 60 * 60);

  return Math.floor(diffHours);
}