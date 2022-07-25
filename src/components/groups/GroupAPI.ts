import axios from "./../../app/axios";
import { Group } from "./GroupSlice";

export function fetchGroups() {
  return new Promise<{ data: Group[] }>(async (resolve) => {
    const res = await axios().get('api/v1/groups')

    resolve(res);
  });
}
