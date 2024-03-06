import { HttpResponse, http } from "msw";

export const roomHandlers = [
  http.get("/rooms", ({ request, params, cokies }) => {
    return HttpResponse.json(["Tom", "Jerry", "Spike"]);
  }),
];
