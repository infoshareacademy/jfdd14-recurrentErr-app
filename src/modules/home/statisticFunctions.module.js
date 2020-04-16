export const toPieData = (data, arr) =>
  data.map((level) => {
    return {
      name: level,
      value: arr.filter((e) => e.level === level).length,
    };
  });

export const toBarData = (data, arr) =>
  data.map((distance) => {
    return {
      name: `${distance[0]}-${distance[1]} km`,
      value: arr.filter(
        (e) => e.distance <= distance[1] && e.distance > distance[0]
      ).length,
    };
  });

export const toMaxDistance = (arr) =>
  arr.reduce((max, e) => {
    return max > e.distance ? max : e.distance;
  }, 0);
