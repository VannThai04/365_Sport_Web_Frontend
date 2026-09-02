import { computed } from "vue";
import { useState } from "#app";
import type { Product } from "~/type/product";

export const useWishlist = () => {
  const wishlist = useState<Product[]>("wishlist", () => []);

  // =====================================================
  // Count
  // =====================================================

  const wishlistCount = computed(() => {
    return wishlist.value.length;
  });

  // =====================================================
  // Is Favorite
  // =====================================================

  const isFavorite = (productId: number) => {
    return wishlist.value.some((product) => product.id === productId);
  };

  // =====================================================
  // Toggle Wishlist
  // =====================================================

  const toggleWishlist = (product: Product) => {
    const index = wishlist.value.findIndex((item) => item.id === product.id);

    if (index !== -1) {
      wishlist.value.splice(index, 1);
    } else {
      wishlist.value.push(product);
    }
  };

  // =====================================================
  // Remove
  // =====================================================

  const removeFromWishlist = (productId: number) => {
    wishlist.value = wishlist.value.filter(
      (product) => product.id !== productId,
    );
  };

  // =====================================================
  // Clear
  // =====================================================

  const clearWishlist = () => {
    wishlist.value = [];
  };

  return {
    wishlist,

    wishlistCount,

    isFavorite,

    toggleWishlist,

    removeFromWishlist,

    clearWishlist,
  };
};
