import type { PageServerLoad } from "./$types";

export const load = (async ({ params }) => {
  return {
    schedule_id: params.schedule_id,
  };
}) satisfies PageServerLoad;
