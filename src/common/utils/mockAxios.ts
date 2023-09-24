import fakeApiAuth from "../fake/auth/me";

export const mockAxiosBaseQuery = () => {
  const result = fakeApiAuth;
  return {
    data: result.GET.data,
  };
};
