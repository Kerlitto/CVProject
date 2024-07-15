import { Heart } from "lucide-react";
import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Button } from "@/components/ui";
import { cn } from "@/lib/utils/cn";
import {
  addFavoriteListing,
  removeFavoriteListing,
} from "@/state/listings/listingsSlice";
import { type ListingDetails } from "@/api/data/listings";
import { type IRootState } from "@/state/store";

interface ListingFavoriteButtonProps {
  className?: string;
  listing?: ListingDetails;
}

const ListingFavoriteButton = ({
  className,
  listing,
}: ListingFavoriteButtonProps) => {
  const favoriteListingIds: number[] = useSelector(
    (state: IRootState) => state.listings.favoriteListingIds
  );
  const dispatch = useDispatch();

  const isFavorite = useMemo(
    () => listing && favoriteListingIds.includes(listing.id),
    [listing, favoriteListingIds]
  );

  return (
    <Button
      className={className}
      variant="outline"
      onClick={e => {
        e.preventDefault();
        e.stopPropagation();

        {
          if (!listing) {
            return;
          }
        }
        if (isFavorite) {
          dispatch(removeFavoriteListing(listing.id));
        } else {
          dispatch(addFavoriteListing(listing.id));
        }
      }}
    >
      <Heart
        className={cn("h-4 w-4", { "fill-primary text-primary": isFavorite })}
      />
    </Button>
  );
};

export default ListingFavoriteButton;
