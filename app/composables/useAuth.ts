export interface AuthUser {
  id: number;
  name: string;
  email: string;
  role: string;
}

export const useAuth = () => {
  const user = useState<AuthUser | null>("auth-user", () => null);
  const isLoading = useState("auth-loading", () => false);

  const loadUser = async () => {
    if (isLoading.value) return;

    isLoading.value = true;

    try {
      user.value = await $fetch<AuthUser>("/api/auth/me");
    } catch {
      user.value = null;
    } finally {
      isLoading.value = false;
    }
  };

  const logout = async () => {
    await $fetch("/api/auth/logout", { method: "POST" });
    user.value = null;
    await navigateTo("/");
  };

  return { user, isLoading, loadUser, logout };
};
