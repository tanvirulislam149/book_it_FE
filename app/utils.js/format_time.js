const format_time = (time) => {
  return new Date("1970-01-01T" + time).toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });
};

export default format_time;
