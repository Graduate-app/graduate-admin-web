const handleTimeConversions = function (duration: string): Date {
  const now = Date.now();
  // Match the duration format (e.g., 1590s, 1d, etc.)
  const match = duration.match(/^(\d+)([smhd])$/);
  if (!match) {
    throw new Error("Invalid duration format. Use 'Xs', 'Xm', 'Xh', or 'Xd'.");
  }

  const value = parseInt(match[1], 10);
  const unit = match[2];

  let multiplier: number;

  switch (unit) {
    case 's': // seconds
      multiplier = 1000;
      break;
    case 'm': // minutes
      multiplier = 1000 * 60;
      break;
    case 'h': // hours
      multiplier = 1000 * 60 * 60;
      break;
    case 'd': // days
      multiplier = 1000 * 60 * 60 * 24;
      break;
    default:
      throw new Error("Unsupported time unit. Use 's', 'm', 'h', or 'd'.");
  }

  return new Date(now + value * multiplier);
}

export default handleTimeConversions;