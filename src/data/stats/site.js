import dayjs from "dayjs";

/* Keys match keys returned by the github api. Fields without keys are
 * mostly jokes. To see everything returned by the github api, run:
 curl https://api.github.com/repos/joshex150
 */
const data = [
  {
    label: "Stars this repository has on github",
    key: "stargazers_count",
    link: "https://github.com/joshex150/portfolio",
  },
  {
    label: "Number of people watching this repository",
    key: "subscribers_count",
    link: "https://github.com/joshex150/portfolio",
  },
  {
    label: "Number of forks",
    key: "forks",
    link: "https://github.com/joshex150/portfolio",
  },
  {
    label: "Number of spoons",
    value: "0",
  },
  {
    label: "Number of linter warnings",
    value: "0", // enforced via github workflow
  },
  {
    label: "Size",
    key: "size",
    link: "https://github.com/joshex150/portfolio",
  },
  {
    label: "Created at",
    key: "created_at",
    link: "https://github.com/joshex150/portfolio",
    format: (x) => dayjs(x).format("MMMM DD, YYYY"),
  },
  {
    label: "Last updated at",
    key: "pushed_at",
    link: "https://github.com/joshex150/portfolio",
    format: (x) => dayjs(x).format("MMMM DD, YYYY"),
  },
];

export default data;
