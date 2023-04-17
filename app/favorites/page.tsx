import EmptyState from "../components/EmptyState"
import ClientOnly from "../components/ClientOnly"

import getCurrentUser from "../actions/getCurrentUser"
import getFavoriteListings from "../actions/getFavoriteListings"
import FavoritesClient from "./FavoritesClient"

const ListingPage = async () => {
    const currentUser = await getCurrentUser();
    const listings = await getFavoriteListings();

    if(!currentUser) {
      return (
          <ClientOnly>
              <EmptyState 
                  title="Unauthorized!"
                  subtitle="Please login."
              />
          </ClientOnly>
      )
    }
  
    if(listings.length === 0) {
      return (
          <ClientOnly>
              <EmptyState 
                   title="No favorite listings!"
                   subtitle="Looks like you don't have any favorite listings."
              />
          </ClientOnly>
      )
    }
      return (
      <ClientOnly>
        <FavoritesClient 
            listings={listings}
            currentUser={currentUser}
        />
      </ClientOnly>
    )
  }
  
  export default ListingPage