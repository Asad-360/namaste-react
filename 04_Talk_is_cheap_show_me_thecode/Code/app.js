import React from "react";
import ReactDOM from "react-dom/client";

/**
 * ! What components we would have.
 * 1. Header
 *      - logo
 *      - Nav-items
 * 2. Body
 *      - Search
 *      - ResturantsCard
 *          - image
 *          - start rating
 *          - cusines
 *          - time for delivery
 *          - delivery time etc
 * 3. Footer
 *
 */
// Data swiggy
const swiggyData = {
  statusCode: 0,
  data: {
    statusMessage: "done successfully",
    pageOffset: {
      nextOffset: "COVCELQ4KICw7oue3YacJjCnEw==",
      widgetOffset: {
        NewListingView_Topical_Fullbleed: "",
        NewListingView_Topical_Version2: "",
        NewListingView_category_bar_chicletranking_TwoRows: "",
        NewListingView_category_bar_chicletranking_TwoRows_Rendition: "",
        Restaurant_Group_WebView_PB_Theme: "",
        Restaurant_Group_WebView_SEO_PB_Theme: "",
        collectionV5RestaurantListWidget_SimRestoRelevance_food_seo: "10",
        inlineFacetFilter: "",
        restaurantCountWidget: "",
      },
    },
    cards: [
      {
        card: {
          card: {
            "@type": "type.googleapis.com/swiggy.gandalf.widgets.v2.GridWidget",
            header: {
              headerStyling: {
                padding: {
                  left: 16,
                  top: 14,
                  bottom: 2,
                },
              },
            },
            layout: {
              rows: 1,
              columns: 4,
              horizontalScrollEnabled: true,
              shouldSnap: true,
              itemSpacing: 10,
              widgetPadding: {},
              containerStyle: {
                containerPadding: {
                  left: 16,
                  top: 12,
                  right: 16,
                  bottom: 12,
                },
              },
              scrollBar: {
                scrollThumbColor: "#E46D47",
                scrollTrackColor: "#E4E4E4",
                width: 54,
                height: 4,
                scrollStyling: {
                  padding: {
                    top: 6,
                    bottom: 12,
                  },
                },
              },
              autoScrollConfig: {
                isScrollEnabled: true,
                autoScrollDuration: 4,
                autoScrollResetDuration: 4,
              },
              dotScrollBar: {
                activeColor: "#36393E",
                inactiveColor: "#66686E",
                activeSize: 16,
                inactiveMediumSize: 7,
                inactiveSmallSize: 4,
                dotSpacing: 8,
                windowSize: 5,
                showCount: true,
                textColor: "#FFFFFF",
                scrollStyling: {
                  padding: {
                    top: 6,
                    bottom: 12,
                  },
                },
              },
            },
            imageGridCards: {
              info: [
                {
                  id: "1200053",
                  imageId:
                    "rng/md/carousel/production/345b2c3e5d0064046c07b0fe01de8e66",
                  action: {
                    link: "https://www.swiggy.com/collections/92872?collection_id=92872&tags=layout_ux4&type=rcv2",
                    text: "All new super",
                    type: "WEBLINK",
                  },
                  entityType: "BANNER",
                  accessibility: {
                    altText: "GET 50% OFF ON FIRST ORDER",
                    altTextCta: "ORDER NOW",
                  },
                  entityId: "92872",
                  frequencyCapping: {},
                },
                {
                  id: "1266143",
                  imageId:
                    "rng/md/carousel/production/07983e8a681a72d4b0d673f17c3a9aa2",
                  action: {
                    link: "https://www.swiggy.com/menu/498382",
                    text: "Burger King",
                    type: "WEBLINK",
                  },
                  entityType: "BANNER",
                  accessibility: {
                    altText: "Burger King",
                    altTextCta: "Order Now",
                  },
                  entityId: "498382",
                  frequencyCapping: {},
                  isManualAds: true,
                },
                {
                  id: "1266147",
                  imageId:
                    "rng/md/carousel/production/e36c1d686d3d19be24f152329085f84d",
                  action: {
                    link: "https://www.swiggy.com/menu/752746",
                    text: "Olio",
                    type: "WEBLINK",
                  },
                  entityType: "BANNER",
                  accessibility: {
                    altText: "Flat 150 off",
                    altTextCta: "Order now",
                  },
                  entityId: "752746",
                  frequencyCapping: {},
                  isManualAds: true,
                },
                {
                  id: "1266150",
                  imageId:
                    "rng/md/carousel/production/96a4919031b1601a70751bf70802def6",
                  action: {
                    link: "https://www.swiggy.com/menu/416830",
                    text: "LOIUE",
                    type: "WEBLINK",
                  },
                  entityType: "BANNER",
                  accessibility: {
                    altText: "Freebie Free Peri Peri Fries",
                    altTextCta: "Order Now",
                  },
                  entityId: "416830",
                  frequencyCapping: {},
                  isManualAds: true,
                },
              ],
              style: {
                width: {
                  type: "TYPE_RELATIVE",
                  value: 0.95238,
                  reference: "RELATIVE_DIMENSION_REFERENCE_CONTAINER_WIDTH",
                },
                height: {
                  type: "TYPE_RELATIVE",
                  value: 0.59685,
                  reference: "RELATIVE_DIMENSION_REFERENCE_WIDTH",
                },
              },
            },
            id: "topical_banner",
            gridElements: {
              infoWithStyle: {
                "@type":
                  "type.googleapis.com/swiggy.gandalf.widgets.v2.ImageInfoLayoutCard",
                info: [
                  {
                    id: "1200053",
                    imageId:
                      "rng/md/carousel/production/345b2c3e5d0064046c07b0fe01de8e66",
                    action: {
                      link: "https://www.swiggy.com/collections/92872?collection_id=92872&tags=layout_ux4&type=rcv2",
                      text: "All new super",
                      type: "WEBLINK",
                    },
                    entityType: "BANNER",
                    accessibility: {
                      altText: "GET 50% OFF ON FIRST ORDER",
                      altTextCta: "ORDER NOW",
                    },
                    entityId: "92872",
                    frequencyCapping: {},
                  },
                  {
                    id: "1266143",
                    imageId:
                      "rng/md/carousel/production/07983e8a681a72d4b0d673f17c3a9aa2",
                    action: {
                      link: "https://www.swiggy.com/menu/498382",
                      text: "Burger King",
                      type: "WEBLINK",
                    },
                    entityType: "BANNER",
                    accessibility: {
                      altText: "Burger King",
                      altTextCta: "Order Now",
                    },
                    entityId: "498382",
                    frequencyCapping: {},
                    isManualAds: true,
                  },
                  {
                    id: "1266147",
                    imageId:
                      "rng/md/carousel/production/e36c1d686d3d19be24f152329085f84d",
                    action: {
                      link: "https://www.swiggy.com/menu/752746",
                      text: "Olio",
                      type: "WEBLINK",
                    },
                    entityType: "BANNER",
                    accessibility: {
                      altText: "Flat 150 off",
                      altTextCta: "Order now",
                    },
                    entityId: "752746",
                    frequencyCapping: {},
                    isManualAds: true,
                  },
                  {
                    id: "1266150",
                    imageId:
                      "rng/md/carousel/production/96a4919031b1601a70751bf70802def6",
                    action: {
                      link: "https://www.swiggy.com/menu/416830",
                      text: "LOIUE",
                      type: "WEBLINK",
                    },
                    entityType: "BANNER",
                    accessibility: {
                      altText: "Freebie Free Peri Peri Fries",
                      altTextCta: "Order Now",
                    },
                    entityId: "416830",
                    frequencyCapping: {},
                    isManualAds: true,
                  },
                ],
                style: {
                  width: {
                    type: "TYPE_RELATIVE",
                    value: 0.95238,
                    reference: "RELATIVE_DIMENSION_REFERENCE_CONTAINER_WIDTH",
                  },
                  height: {
                    type: "TYPE_RELATIVE",
                    value: 0.59685,
                    reference: "RELATIVE_DIMENSION_REFERENCE_WIDTH",
                  },
                },
              },
            },
          },
        },
      },
      {
        card: {
          card: {
            "@type": "type.googleapis.com/swiggy.gandalf.widgets.v2.GridWidget",
            header: {
              title: "What's on your mind?",
              headerStyling: {
                padding: {
                  left: 16,
                  top: 16,
                  bottom: 4,
                },
              },
            },
            layout: {
              rows: 1,
              columns: 10,
              horizontalScrollEnabled: true,
              itemSpacing: 24,
              widgetPadding: {},
              containerStyle: {
                containerPadding: {
                  left: 8,
                  top: 8,
                  right: 12,
                  bottom: 4,
                },
              },
              scrollBar: {},
              widgetTheme: {
                defaultMode: {
                  backgroundColour: "#FFFFFF",
                  theme: "THEME_TYPE_LIGHT",
                },
                darkMode: {
                  theme: "THEME_TYPE_DARK",
                },
              },
            },
            imageGridCards: {
              info: [
                {
                  id: "762797",
                  imageId:
                    "v1674029845/PC_Creative%20refresh/3D_bau/banners_new/Burger.png",
                  action: {
                    link: "https://www.swiggy.com/collections/83637?collection_id=83637&tags=layout_CCS_Burger&type=rcv2",
                    text: "Burgers",
                    type: "WEBLINK",
                  },
                  entityType: "BANNER",
                  accessibility: {
                    altText: "restaurants curated for burger",
                    altTextCta: "open",
                  },
                  entityId:
                    "swiggy://collectionV2?collection_id=83637&tags=layout_CCS_Burger",
                  frequencyCapping: {},
                },
                {
                  id: "750580",
                  imageId:
                    "v1674029856/PC_Creative%20refresh/3D_bau/banners_new/Pizza.png",
                  action: {
                    link: "https://www.swiggy.com/collections/83644?collection_id=83644&tags=layout_CCS_Pizza&type=rcv2",
                    text: "pizzas",
                    type: "WEBLINK",
                  },
                  entityType: "BANNER",
                  accessibility: {
                    altText: "restaurants curated for pizza",
                    altTextCta: "open",
                  },
                  entityId:
                    "swiggy://collectionV2?collection_id=83644&tags=layout_CCS_Pizza",
                  frequencyCapping: {},
                },
                {
                  id: "750582",
                  imageId:
                    "v1675667625/PC_Creative%20refresh/North_Indian_4.png",
                  action: {
                    link: "https://www.swiggy.com/collections/83645?collection_id=83645&tags=layout_CCS_NorthIndian&type=rcv2",
                    text: "North Indian",
                    type: "WEBLINK",
                  },
                  entityType: "BANNER",
                  accessibility: {
                    altText: "restaurants curated for north indian",
                    altTextCta: "open",
                  },
                  entityId:
                    "swiggy://collectionV2?collection_id=83645&tags=layout_CCS_NorthIndian",
                  frequencyCapping: {},
                },
                {
                  id: "750223",
                  imageId:
                    "v1674029858/PC_Creative%20refresh/3D_bau/banners_new/Rolls.png",
                  action: {
                    link: "https://www.swiggy.com/collections/83670?collection_id=83670&tags=layout_CCS_Rolls&type=rcv2",
                    text: "Rolls",
                    type: "WEBLINK",
                  },
                  entityType: "BANNER",
                  accessibility: {
                    altText: "restaurants curated for roll",
                    altTextCta: "open",
                  },
                  entityId:
                    "swiggy://collectionV2?collection_id=83670&tags=layout_CCS_Rolls",
                  frequencyCapping: {},
                },
                {
                  id: "750592",
                  imageId: "v1675667625/PC_Creative%20refresh/Biryani_2.png",
                  action: {
                    link: "https://www.swiggy.com/collections/83649?collection_id=83649&tags=layout_CCS_Biryani&type=rcv2",
                    text: "Biryani",
                    type: "WEBLINK",
                  },
                  entityType: "BANNER",
                  accessibility: {
                    altText: "restaurants curated for biryani",
                    altTextCta: "open",
                  },
                  entityId:
                    "swiggy://collectionV2?collection_id=83649&tags=layout_CCS_Biryani",
                  frequencyCapping: {},
                },
                {
                  id: "749769",
                  imageId:
                    "v1674029852/PC_Creative%20refresh/3D_bau/banners_new/Momos.png",
                  action: {
                    link: "https://www.swiggy.com/collections/80462?collection_id=80462&tags=layout_CCS_Momos&type=rcv2",
                    text: "Momos",
                    type: "WEBLINK",
                  },
                  entityType: "BANNER",
                  accessibility: {
                    altText: "restaurant curated for momos",
                    altTextCta: "open",
                  },
                  entityId:
                    "swiggy://collectionV2?collection_id=80462&tags=layout_CCS_Momos",
                  frequencyCapping: {},
                },
                {
                  id: "750588",
                  imageId:
                    "v1674029848/PC_Creative%20refresh/3D_bau/banners_new/Chinese.png",
                  action: {
                    link: "https://www.swiggy.com/collections/83647?collection_id=83647&tags=layout_CCS_Chinese&type=rcv2",
                    text: "Chinese",
                    type: "WEBLINK",
                  },
                  entityType: "BANNER",
                  accessibility: {
                    altText: "restaurant curated for chinese",
                    altTextCta: "open",
                  },
                  entityId:
                    "swiggy://collectionV2?collection_id=83647&tags=layout_CCS_Chinese",
                  frequencyCapping: {},
                },
                {
                  id: "750203",
                  imageId:
                    "v1674029853/PC_Creative%20refresh/3D_bau/banners_new/Paratha.png",
                  action: {
                    link: "https://www.swiggy.com/collections/80476?collection_id=80476&tags=layout_BAU_Contextual%2Cparatha%2Cads_pc_paratha&type=rcv2",
                    text: "Paratha",
                    type: "WEBLINK",
                  },
                  entityType: "BANNER",
                  accessibility: {
                    altText: "restaurants curated for paratha",
                    altTextCta: "open",
                  },
                  entityId: "80476",
                  frequencyCapping: {},
                },
                {
                  id: "750111",
                  imageId: "v1675667630/PC_Creative%20refresh/Desserts_2.png",
                  action: {
                    link: "https://www.swiggy.com/collections/83662?collection_id=83662&tags=layout_CCS_Desserts&type=rcv2",
                    text: "Dessert",
                    type: "WEBLINK",
                  },
                  entityType: "BANNER",
                  accessibility: {
                    altText: "restaurant curated for dessert",
                    altTextCta: "open",
                  },
                  entityId:
                    "swiggy://collectionV2?collection_id=83662&tags=layout_CCS_Desserts",
                  frequencyCapping: {},
                },
                {
                  id: "749874",
                  imageId:
                    "v1674029845/PC_Creative%20refresh/3D_bau/banners_new/Cakes.png",
                  action: {
                    link: "https://www.swiggy.com/collections/83656?collection_id=83656&tags=layout_CCS_Cake&type=rcv2",
                    text: "Cakes",
                    type: "WEBLINK",
                  },
                  entityType: "BANNER",
                  accessibility: {
                    altText: "restaurant curated for cakes",
                    altTextCta: "open",
                  },
                  entityId:
                    "swiggy://collectionV2?collection_id=83656&tags=layout_CCS_Cake",
                  frequencyCapping: {},
                },
                {
                  id: "749774",
                  imageId:
                    "v1674029855/PC_Creative%20refresh/3D_bau/banners_new/Noodles.png",
                  action: {
                    link: "https://www.swiggy.com/collections/80464?collection_id=80464&tags=layout_BAU_Contextual%2Cnoodles&type=rcv2",
                    text: "Noodles",
                    type: "WEBLINK",
                  },
                  entityType: "BANNER",
                  accessibility: {
                    altText: "restaurant curated for noodles",
                    altTextCta: "open",
                  },
                  entityId: "80464",
                  frequencyCapping: {},
                },
                {
                  id: "750235",
                  imageId:
                    "v1674029860/PC_Creative%20refresh/3D_bau/banners_new/Sandwich.png",
                  action: {
                    link: "https://www.swiggy.com/collections/83667?collection_id=83667&tags=layout_CCS_Sandwiches&type=rcv2",
                    text: "Sandwich",
                    type: "WEBLINK",
                  },
                  entityType: "BANNER",
                  accessibility: {
                    altText: "restaurants curated for sandwich",
                    altTextCta: "open",
                  },
                  entityId:
                    "swiggy://collectionV2?collection_id=83667&tags=layout_CCS_Sandwiches",
                  frequencyCapping: {},
                },
                {
                  id: "750636",
                  imageId:
                    "v1674029853/PC_Creative%20refresh/3D_bau/banners_new/Kebabs.png",
                  action: {
                    link: "https://www.swiggy.com/collections/80452?collection_id=80452&tags=layout_BAU_Contextual%2Ckebab%2Cads_pc_kebab&type=rcv2",
                    text: "Kebabs",
                    type: "WEBLINK",
                  },
                  entityType: "BANNER",
                  accessibility: {
                    altText: "restaurant curated for kebabs",
                    altTextCta: "open",
                  },
                  entityId: "80452",
                  frequencyCapping: {},
                },
                {
                  id: "750209",
                  imageId:
                    "v1674029847/PC_Creative%20refresh/3D_bau/banners_new/Pastry.png",
                  action: {
                    link: "https://www.swiggy.com/collections/80358?collection_id=80358&tags=layout_BAU_Contextual%2Clayout_ux4&type=rcv2",
                    text: "Pastry",
                    type: "WEBLINK",
                  },
                  entityType: "BANNER",
                  accessibility: {
                    altText: "restaurant curated for Pastry",
                    altTextCta: "open",
                  },
                  entityId: "80358",
                  frequencyCapping: {},
                },
                {
                  id: "749879",
                  imageId:
                    "v1674029844/PC_Creative%20refresh/3D_bau/banners_new/Chole_Bature.png",
                  action: {
                    link: "https://www.swiggy.com/collections/80383?collection_id=80383&tags=layout_CCS_CholeBhature&type=rcv2",
                    text: "Chole Bhature",
                    type: "WEBLINK",
                  },
                  entityType: "BANNER",
                  accessibility: {
                    altText: "restaurant curated for chhole bhatoore",
                    altTextCta: "open",
                  },
                  entityId:
                    "swiggy://collectionV2?collection_id=80383&tags=layout_CCS_CholeBhature",
                  frequencyCapping: {},
                },
                {
                  id: "750249",
                  imageId:
                    "v1674029859/PC_Creative%20refresh/3D_bau/banners_new/Shawarma.png",
                  action: {
                    link: "https://www.swiggy.com/collections/80403?collection_id=80403&tags=layout_Shawarma_Contextual&type=rcv2",
                    text: "Shawarma",
                    type: "WEBLINK",
                  },
                  entityType: "BANNER",
                  accessibility: {
                    altText: "restaurant curated for shawarma",
                    altTextCta: "open",
                  },
                  entityId:
                    "swiggy://collectionV2?collection_id=80403&tags=layout_Shawarma_Contextual",
                  frequencyCapping: {},
                },
                {
                  id: "750207",
                  imageId:
                    "v1674029854/PC_Creative%20refresh/3D_bau/banners_new/Pasta.png",
                  action: {
                    link: "https://www.swiggy.com/collections/80480?collection_id=80480&tags=layout_BAU_Contextual%2Cpasta%2Cads_pc_pasta&type=rcv2",
                    text: "Pasta",
                    type: "WEBLINK",
                  },
                  entityType: "BANNER",
                  accessibility: {
                    altText: "restaurant curated for pasta",
                    altTextCta: "open",
                  },
                  entityId: "80480",
                  frequencyCapping: {},
                },
                {
                  id: "750597",
                  imageId:
                    "v1674029851/PC_Creative%20refresh/3D_bau/banners_new/Ice_Creams.png",
                  action: {
                    link: "https://www.swiggy.com/collections/83650?collection_id=83650&tags=layout_CCS_IceCreams&type=rcv2",
                    text: "Ice Cream",
                    type: "WEBLINK",
                  },
                  entityType: "BANNER",
                  accessibility: {
                    altText: "restaurants curated for icecream",
                    altTextCta: "open",
                  },
                  entityId:
                    "swiggy://collectionV2?collection_id=83650&tags=layout_CCS_IceCreams",
                  frequencyCapping: {},
                },
                {
                  id: "750226",
                  imageId:
                    "v1674029859/PC_Creative%20refresh/3D_bau/banners_new/Salad.png",
                  action: {
                    link: "https://www.swiggy.com/collections/80395?collection_id=80395&tags=layout_CCS_Salad&type=rcv2",
                    text: "Salad",
                    type: "WEBLINK",
                  },
                  entityType: "BANNER",
                  accessibility: {
                    altText: "restaurant curated for salad",
                    altTextCta: "open",
                  },
                  entityId:
                    "swiggy://collectionV2?collection_id=80395&tags=layout_CCS_Salad",
                  frequencyCapping: {},
                },
                {
                  id: "750217",
                  imageId:
                    "v1674029854/PC_Creative%20refresh/3D_bau/banners_new/Pav_Bhaji.png",
                  action: {
                    link: "https://www.swiggy.com/collections/80364?collection_id=80364&tags=layout_PavBhaji_Contextual&type=rcv2",
                    text: "Pav Bhaji",
                    type: "WEBLINK",
                  },
                  entityType: "BANNER",
                  accessibility: {
                    altText: "restaurant curated for pav bhaji",
                    altTextCta: "open",
                  },
                  entityId:
                    "swiggy://collectionV2?collection_id=80364&tags=layout_PavBhaji_Contextual",
                  frequencyCapping: {},
                },
              ],
              style: {
                width: {
                  type: "TYPE_RELATIVE",
                  value: 0.2941,
                  reference: "RELATIVE_DIMENSION_REFERENCE_CONTAINER_WIDTH",
                },
                height: {
                  type: "TYPE_RELATIVE",
                  value: 1.2444,
                  reference: "RELATIVE_DIMENSION_REFERENCE_WIDTH",
                },
              },
            },
            id: "whats_on_your_mind",
            gridElements: {
              infoWithStyle: {
                "@type":
                  "type.googleapis.com/swiggy.gandalf.widgets.v2.ImageInfoLayoutCard",
                info: [
                  {
                    id: "762797",
                    imageId:
                      "v1674029845/PC_Creative%20refresh/3D_bau/banners_new/Burger.png",
                    action: {
                      link: "https://www.swiggy.com/collections/83637?collection_id=83637&tags=layout_CCS_Burger&type=rcv2",
                      text: "Burgers",
                      type: "WEBLINK",
                    },
                    entityType: "BANNER",
                    accessibility: {
                      altText: "restaurants curated for burger",
                      altTextCta: "open",
                    },
                    entityId:
                      "swiggy://collectionV2?collection_id=83637&tags=layout_CCS_Burger",
                    frequencyCapping: {},
                  },
                  {
                    id: "750580",
                    imageId:
                      "v1674029856/PC_Creative%20refresh/3D_bau/banners_new/Pizza.png",
                    action: {
                      link: "https://www.swiggy.com/collections/83644?collection_id=83644&tags=layout_CCS_Pizza&type=rcv2",
                      text: "pizzas",
                      type: "WEBLINK",
                    },
                    entityType: "BANNER",
                    accessibility: {
                      altText: "restaurants curated for pizza",
                      altTextCta: "open",
                    },
                    entityId:
                      "swiggy://collectionV2?collection_id=83644&tags=layout_CCS_Pizza",
                    frequencyCapping: {},
                  },
                  {
                    id: "750582",
                    imageId:
                      "v1675667625/PC_Creative%20refresh/North_Indian_4.png",
                    action: {
                      link: "https://www.swiggy.com/collections/83645?collection_id=83645&tags=layout_CCS_NorthIndian&type=rcv2",
                      text: "North Indian",
                      type: "WEBLINK",
                    },
                    entityType: "BANNER",
                    accessibility: {
                      altText: "restaurants curated for north indian",
                      altTextCta: "open",
                    },
                    entityId:
                      "swiggy://collectionV2?collection_id=83645&tags=layout_CCS_NorthIndian",
                    frequencyCapping: {},
                  },
                  {
                    id: "750223",
                    imageId:
                      "v1674029858/PC_Creative%20refresh/3D_bau/banners_new/Rolls.png",
                    action: {
                      link: "https://www.swiggy.com/collections/83670?collection_id=83670&tags=layout_CCS_Rolls&type=rcv2",
                      text: "Rolls",
                      type: "WEBLINK",
                    },
                    entityType: "BANNER",
                    accessibility: {
                      altText: "restaurants curated for roll",
                      altTextCta: "open",
                    },
                    entityId:
                      "swiggy://collectionV2?collection_id=83670&tags=layout_CCS_Rolls",
                    frequencyCapping: {},
                  },
                  {
                    id: "750592",
                    imageId: "v1675667625/PC_Creative%20refresh/Biryani_2.png",
                    action: {
                      link: "https://www.swiggy.com/collections/83649?collection_id=83649&tags=layout_CCS_Biryani&type=rcv2",
                      text: "Biryani",
                      type: "WEBLINK",
                    },
                    entityType: "BANNER",
                    accessibility: {
                      altText: "restaurants curated for biryani",
                      altTextCta: "open",
                    },
                    entityId:
                      "swiggy://collectionV2?collection_id=83649&tags=layout_CCS_Biryani",
                    frequencyCapping: {},
                  },
                  {
                    id: "749769",
                    imageId:
                      "v1674029852/PC_Creative%20refresh/3D_bau/banners_new/Momos.png",
                    action: {
                      link: "https://www.swiggy.com/collections/80462?collection_id=80462&tags=layout_CCS_Momos&type=rcv2",
                      text: "Momos",
                      type: "WEBLINK",
                    },
                    entityType: "BANNER",
                    accessibility: {
                      altText: "restaurant curated for momos",
                      altTextCta: "open",
                    },
                    entityId:
                      "swiggy://collectionV2?collection_id=80462&tags=layout_CCS_Momos",
                    frequencyCapping: {},
                  },
                  {
                    id: "750588",
                    imageId:
                      "v1674029848/PC_Creative%20refresh/3D_bau/banners_new/Chinese.png",
                    action: {
                      link: "https://www.swiggy.com/collections/83647?collection_id=83647&tags=layout_CCS_Chinese&type=rcv2",
                      text: "Chinese",
                      type: "WEBLINK",
                    },
                    entityType: "BANNER",
                    accessibility: {
                      altText: "restaurant curated for chinese",
                      altTextCta: "open",
                    },
                    entityId:
                      "swiggy://collectionV2?collection_id=83647&tags=layout_CCS_Chinese",
                    frequencyCapping: {},
                  },
                  {
                    id: "750203",
                    imageId:
                      "v1674029853/PC_Creative%20refresh/3D_bau/banners_new/Paratha.png",
                    action: {
                      link: "https://www.swiggy.com/collections/80476?collection_id=80476&tags=layout_BAU_Contextual%2Cparatha%2Cads_pc_paratha&type=rcv2",
                      text: "Paratha",
                      type: "WEBLINK",
                    },
                    entityType: "BANNER",
                    accessibility: {
                      altText: "restaurants curated for paratha",
                      altTextCta: "open",
                    },
                    entityId: "80476",
                    frequencyCapping: {},
                  },
                  {
                    id: "750111",
                    imageId: "v1675667630/PC_Creative%20refresh/Desserts_2.png",
                    action: {
                      link: "https://www.swiggy.com/collections/83662?collection_id=83662&tags=layout_CCS_Desserts&type=rcv2",
                      text: "Dessert",
                      type: "WEBLINK",
                    },
                    entityType: "BANNER",
                    accessibility: {
                      altText: "restaurant curated for dessert",
                      altTextCta: "open",
                    },
                    entityId:
                      "swiggy://collectionV2?collection_id=83662&tags=layout_CCS_Desserts",
                    frequencyCapping: {},
                  },
                  {
                    id: "749874",
                    imageId:
                      "v1674029845/PC_Creative%20refresh/3D_bau/banners_new/Cakes.png",
                    action: {
                      link: "https://www.swiggy.com/collections/83656?collection_id=83656&tags=layout_CCS_Cake&type=rcv2",
                      text: "Cakes",
                      type: "WEBLINK",
                    },
                    entityType: "BANNER",
                    accessibility: {
                      altText: "restaurant curated for cakes",
                      altTextCta: "open",
                    },
                    entityId:
                      "swiggy://collectionV2?collection_id=83656&tags=layout_CCS_Cake",
                    frequencyCapping: {},
                  },
                  {
                    id: "749774",
                    imageId:
                      "v1674029855/PC_Creative%20refresh/3D_bau/banners_new/Noodles.png",
                    action: {
                      link: "https://www.swiggy.com/collections/80464?collection_id=80464&tags=layout_BAU_Contextual%2Cnoodles&type=rcv2",
                      text: "Noodles",
                      type: "WEBLINK",
                    },
                    entityType: "BANNER",
                    accessibility: {
                      altText: "restaurant curated for noodles",
                      altTextCta: "open",
                    },
                    entityId: "80464",
                    frequencyCapping: {},
                  },
                  {
                    id: "750235",
                    imageId:
                      "v1674029860/PC_Creative%20refresh/3D_bau/banners_new/Sandwich.png",
                    action: {
                      link: "https://www.swiggy.com/collections/83667?collection_id=83667&tags=layout_CCS_Sandwiches&type=rcv2",
                      text: "Sandwich",
                      type: "WEBLINK",
                    },
                    entityType: "BANNER",
                    accessibility: {
                      altText: "restaurants curated for sandwich",
                      altTextCta: "open",
                    },
                    entityId:
                      "swiggy://collectionV2?collection_id=83667&tags=layout_CCS_Sandwiches",
                    frequencyCapping: {},
                  },
                  {
                    id: "750636",
                    imageId:
                      "v1674029853/PC_Creative%20refresh/3D_bau/banners_new/Kebabs.png",
                    action: {
                      link: "https://www.swiggy.com/collections/80452?collection_id=80452&tags=layout_BAU_Contextual%2Ckebab%2Cads_pc_kebab&type=rcv2",
                      text: "Kebabs",
                      type: "WEBLINK",
                    },
                    entityType: "BANNER",
                    accessibility: {
                      altText: "restaurant curated for kebabs",
                      altTextCta: "open",
                    },
                    entityId: "80452",
                    frequencyCapping: {},
                  },
                  {
                    id: "750209",
                    imageId:
                      "v1674029847/PC_Creative%20refresh/3D_bau/banners_new/Pastry.png",
                    action: {
                      link: "https://www.swiggy.com/collections/80358?collection_id=80358&tags=layout_BAU_Contextual%2Clayout_ux4&type=rcv2",
                      text: "Pastry",
                      type: "WEBLINK",
                    },
                    entityType: "BANNER",
                    accessibility: {
                      altText: "restaurant curated for Pastry",
                      altTextCta: "open",
                    },
                    entityId: "80358",
                    frequencyCapping: {},
                  },
                  {
                    id: "749879",
                    imageId:
                      "v1674029844/PC_Creative%20refresh/3D_bau/banners_new/Chole_Bature.png",
                    action: {
                      link: "https://www.swiggy.com/collections/80383?collection_id=80383&tags=layout_CCS_CholeBhature&type=rcv2",
                      text: "Chole Bhature",
                      type: "WEBLINK",
                    },
                    entityType: "BANNER",
                    accessibility: {
                      altText: "restaurant curated for chhole bhatoore",
                      altTextCta: "open",
                    },
                    entityId:
                      "swiggy://collectionV2?collection_id=80383&tags=layout_CCS_CholeBhature",
                    frequencyCapping: {},
                  },
                  {
                    id: "750249",
                    imageId:
                      "v1674029859/PC_Creative%20refresh/3D_bau/banners_new/Shawarma.png",
                    action: {
                      link: "https://www.swiggy.com/collections/80403?collection_id=80403&tags=layout_Shawarma_Contextual&type=rcv2",
                      text: "Shawarma",
                      type: "WEBLINK",
                    },
                    entityType: "BANNER",
                    accessibility: {
                      altText: "restaurant curated for shawarma",
                      altTextCta: "open",
                    },
                    entityId:
                      "swiggy://collectionV2?collection_id=80403&tags=layout_Shawarma_Contextual",
                    frequencyCapping: {},
                  },
                  {
                    id: "750207",
                    imageId:
                      "v1674029854/PC_Creative%20refresh/3D_bau/banners_new/Pasta.png",
                    action: {
                      link: "https://www.swiggy.com/collections/80480?collection_id=80480&tags=layout_BAU_Contextual%2Cpasta%2Cads_pc_pasta&type=rcv2",
                      text: "Pasta",
                      type: "WEBLINK",
                    },
                    entityType: "BANNER",
                    accessibility: {
                      altText: "restaurant curated for pasta",
                      altTextCta: "open",
                    },
                    entityId: "80480",
                    frequencyCapping: {},
                  },
                  {
                    id: "750597",
                    imageId:
                      "v1674029851/PC_Creative%20refresh/3D_bau/banners_new/Ice_Creams.png",
                    action: {
                      link: "https://www.swiggy.com/collections/83650?collection_id=83650&tags=layout_CCS_IceCreams&type=rcv2",
                      text: "Ice Cream",
                      type: "WEBLINK",
                    },
                    entityType: "BANNER",
                    accessibility: {
                      altText: "restaurants curated for icecream",
                      altTextCta: "open",
                    },
                    entityId:
                      "swiggy://collectionV2?collection_id=83650&tags=layout_CCS_IceCreams",
                    frequencyCapping: {},
                  },
                  {
                    id: "750226",
                    imageId:
                      "v1674029859/PC_Creative%20refresh/3D_bau/banners_new/Salad.png",
                    action: {
                      link: "https://www.swiggy.com/collections/80395?collection_id=80395&tags=layout_CCS_Salad&type=rcv2",
                      text: "Salad",
                      type: "WEBLINK",
                    },
                    entityType: "BANNER",
                    accessibility: {
                      altText: "restaurant curated for salad",
                      altTextCta: "open",
                    },
                    entityId:
                      "swiggy://collectionV2?collection_id=80395&tags=layout_CCS_Salad",
                    frequencyCapping: {},
                  },
                  {
                    id: "750217",
                    imageId:
                      "v1674029854/PC_Creative%20refresh/3D_bau/banners_new/Pav_Bhaji.png",
                    action: {
                      link: "https://www.swiggy.com/collections/80364?collection_id=80364&tags=layout_PavBhaji_Contextual&type=rcv2",
                      text: "Pav Bhaji",
                      type: "WEBLINK",
                    },
                    entityType: "BANNER",
                    accessibility: {
                      altText: "restaurant curated for pav bhaji",
                      altTextCta: "open",
                    },
                    entityId:
                      "swiggy://collectionV2?collection_id=80364&tags=layout_PavBhaji_Contextual",
                    frequencyCapping: {},
                  },
                ],
                style: {
                  width: {
                    type: "TYPE_RELATIVE",
                    value: 0.2941,
                    reference: "RELATIVE_DIMENSION_REFERENCE_CONTAINER_WIDTH",
                  },
                  height: {
                    type: "TYPE_RELATIVE",
                    value: 1.2444,
                    reference: "RELATIVE_DIMENSION_REFERENCE_WIDTH",
                  },
                },
              },
            },
          },
        },
      },
      {
        card: {
          card: {
            "@type": "type.googleapis.com/swiggy.gandalf.widgets.v2.GridWidget",
            header: {
              title: "Top restaurant chains in Delhi",
              action: {},
              headerStyling: {
                padding: {
                  left: 16,
                  top: 28,
                  bottom: 18,
                },
              },
            },
            layout: {
              rows: 1,
              columns: 20,
              horizontalScrollEnabled: true,
              itemSpacing: 32,
              widgetPadding: {},
              containerStyle: {
                containerPadding: {
                  left: 16,
                  right: 12,
                  bottom: 12,
                },
              },
              scrollBar: {
                scrollThumbColor: "#E46D47",
                scrollTrackColor: "#02060C",
                width: 54,
                height: 4,
                scrollStyling: {
                  padding: {
                    top: 6,
                    bottom: 24,
                  },
                },
              },
              widgetTheme: {
                defaultMode: {
                  backgroundColour: "#1B3028",
                  theme: "THEME_TYPE_DARK",
                },
                darkMode: {
                  backgroundColour: "#1B3028",
                  theme: "THEME_TYPE_DARK",
                },
              },
            },
            id: "top_brands_for_you",
            gridElements: {
              infoWithStyle: {
                "@type":
                  "type.googleapis.com/swiggy.presentation.food.v2.FavouriteRestaurantInfoWithStyle",
                restaurants: [
                  {
                    info: {
                      id: "10208",
                      name: "Burger King",
                      cloudinaryImageId: "e33e1d3ba7d6b2bb0d45e1001b731fcf",
                      locality: "Sector 10",
                      areaName: "Rohini",
                      costForTwo: "₹350 for two",
                      cuisines: ["Burgers", "American"],
                      avgRating: 4.2,
                      feeDetails: {
                        restaurantId: "10208",
                        fees: [
                          {
                            name: "BASE_DISTANCE",
                            fee: 4000,
                          },
                          {
                            name: "BASE_TIME",
                          },
                          {
                            name: "ANCILLARY_SURGE_FEE",
                          },
                        ],
                        totalFee: 4000,
                      },
                      parentId: "166",
                      avgRatingString: "4.2",
                      totalRatingsString: "10K+",
                      sla: {
                        deliveryTime: 21,
                        lastMileTravel: 2,
                        serviceability: "SERVICEABLE",
                        slaString: "21 mins",
                        lastMileTravelString: "2.0 km",
                        iconType: "ICON_TYPE_EMPTY",
                      },
                      availability: {
                        nextCloseTime: "2023-09-19 03:00:00",
                        opened: true,
                      },
                      badges: {},
                      isOpen: true,
                      type: "F",
                      badgesV2: {
                        entityBadges: {
                          imageBased: {},
                          textBased: {},
                          textExtendedBadges: {},
                        },
                      },
                      aggregatedDiscountInfoV3: {
                        header: "60% OFF",
                        subHeader: "UPTO ₹120",
                      },
                      differentiatedUi: {
                        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        differentiatedUiMediaDetails: {
                          mediaType: "ADS_MEDIA_ENUM_IMAGE",
                          lottie: {},
                          video: {},
                        },
                      },
                      reviewsSummary: {},
                      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      restaurantOfferPresentationInfo: {},
                    },
                    analytics: {},
                    cta: {
                      link: "https://www.swiggy.com/restaurants/burger-king-sector-10-rohini-delhi-10208",
                      type: "WEBLINK",
                    },
                  },
                  {
                    info: {
                      id: "16866",
                      name: "Pizza Hut",
                      cloudinaryImageId: "2b4f62d606d1b2bfba9ba9e5386fabb7",
                      locality: "Sector 3",
                      areaName: "Rohini",
                      costForTwo: "₹350 for two",
                      cuisines: ["Pizzas"],
                      avgRating: 3.8,
                      feeDetails: {
                        restaurantId: "16866",
                        fees: [
                          {
                            name: "BASE_DISTANCE",
                            fee: 4000,
                          },
                          {
                            name: "BASE_TIME",
                          },
                          {
                            name: "ANCILLARY_SURGE_FEE",
                          },
                        ],
                        totalFee: 4000,
                      },
                      parentId: "721",
                      avgRatingString: "3.8",
                      totalRatingsString: "5K+",
                      sla: {
                        deliveryTime: 27,
                        lastMileTravel: 2,
                        serviceability: "SERVICEABLE",
                        slaString: "27 mins",
                        lastMileTravelString: "2.0 km",
                        iconType: "ICON_TYPE_EMPTY",
                      },
                      availability: {
                        nextCloseTime: "2023-09-19 04:00:00",
                        opened: true,
                      },
                      badges: {},
                      isOpen: true,
                      aggregatedDiscountInfoV2: {},
                      type: "F",
                      badgesV2: {
                        entityBadges: {
                          imageBased: {},
                          textBased: {},
                          textExtendedBadges: {},
                        },
                      },
                      differentiatedUi: {
                        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        differentiatedUiMediaDetails: {
                          mediaType: "ADS_MEDIA_ENUM_IMAGE",
                          lottie: {},
                          video: {},
                        },
                      },
                      reviewsSummary: {},
                      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      restaurantOfferPresentationInfo: {},
                    },
                    analytics: {},
                    cta: {
                      link: "https://www.swiggy.com/restaurants/pizza-hut-sector-3-rohini-delhi-16866",
                      type: "WEBLINK",
                    },
                  },
                  {
                    info: {
                      id: "239435",
                      name: "La Pino'z Pizza",
                      cloudinaryImageId: "tolejbnae10pq0udbavn",
                      locality: "New delhi",
                      areaName: "Paschim Vihar",
                      costForTwo: "₹350 for two",
                      cuisines: [
                        "Pizzas",
                        "Pastas",
                        "Italian",
                        "Desserts",
                        "Beverages",
                      ],
                      avgRating: 4,
                      feeDetails: {
                        restaurantId: "239435",
                        fees: [
                          {
                            name: "BASE_DISTANCE",
                            fee: 6600,
                          },
                          {
                            name: "BASE_TIME",
                          },
                          {
                            name: "ANCILLARY_SURGE_FEE",
                          },
                        ],
                        totalFee: 6600,
                      },
                      parentId: "4961",
                      avgRatingString: "4.0",
                      totalRatingsString: "5K+",
                      sla: {
                        deliveryTime: 23,
                        lastMileTravel: 5,
                        serviceability: "SERVICEABLE",
                        slaString: "23 mins",
                        lastMileTravelString: "5.0 km",
                        iconType: "ICON_TYPE_EMPTY",
                      },
                      availability: {
                        nextCloseTime: "2023-09-19 05:00:00",
                        opened: true,
                      },
                      badges: {},
                      isOpen: true,
                      type: "F",
                      badgesV2: {
                        entityBadges: {
                          imageBased: {},
                          textBased: {},
                          textExtendedBadges: {},
                        },
                      },
                      aggregatedDiscountInfoV3: {
                        header: "60% OFF",
                        subHeader: "UPTO ₹120",
                      },
                      differentiatedUi: {
                        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        differentiatedUiMediaDetails: {
                          mediaType: "ADS_MEDIA_ENUM_IMAGE",
                          lottie: {},
                          video: {},
                        },
                      },
                      reviewsSummary: {},
                      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      restaurantOfferPresentationInfo: {},
                    },
                    analytics: {},
                    cta: {
                      link: "https://www.swiggy.com/restaurants/la-pinoz-pizza-new-paschim-vihar-delhi-239435",
                      type: "WEBLINK",
                    },
                  },
                  {
                    info: {
                      id: "10392",
                      name: "Subway",
                      cloudinaryImageId: "1ace5fa65eff3e1223feb696c956b38b",
                      locality: "Sector 3",
                      areaName: "Rohini",
                      costForTwo: "₹350 for two",
                      cuisines: ["Salads", "Snacks", "Desserts", "Beverages"],
                      avgRating: 4,
                      feeDetails: {
                        restaurantId: "10392",
                        fees: [
                          {
                            name: "BASE_DISTANCE",
                            fee: 4000,
                          },
                          {
                            name: "BASE_TIME",
                          },
                          {
                            name: "ANCILLARY_SURGE_FEE",
                          },
                        ],
                        totalFee: 4000,
                      },
                      parentId: "2",
                      avgRatingString: "4.0",
                      totalRatingsString: "10K+",
                      sla: {
                        deliveryTime: 19,
                        lastMileTravel: 2,
                        serviceability: "SERVICEABLE",
                        slaString: "19 mins",
                        lastMileTravelString: "2.0 km",
                        iconType: "ICON_TYPE_EMPTY",
                      },
                      availability: {
                        nextCloseTime: "2023-09-19 04:00:00",
                        opened: true,
                      },
                      badges: {},
                      isOpen: true,
                      type: "F",
                      badgesV2: {
                        entityBadges: {
                          imageBased: {},
                          textBased: {},
                          textExtendedBadges: {},
                        },
                      },
                      aggregatedDiscountInfoV3: {
                        header: "40% OFF",
                        subHeader: "UPTO ₹80",
                      },
                      differentiatedUi: {
                        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        differentiatedUiMediaDetails: {
                          mediaType: "ADS_MEDIA_ENUM_IMAGE",
                          lottie: {},
                          video: {},
                        },
                      },
                      reviewsSummary: {},
                      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      restaurantOfferPresentationInfo: {},
                    },
                    analytics: {},
                    cta: {
                      link: "https://www.swiggy.com/restaurants/subway-sector-3-rohini-delhi-10392",
                      type: "WEBLINK",
                    },
                  },
                  {
                    info: {
                      id: "26723",
                      name: "KFC",
                      cloudinaryImageId: "56c9ab92bd79745fd152a30fa2525426",
                      locality: "Sector 3",
                      areaName: "Rohini",
                      costForTwo: "₹400 for two",
                      cuisines: [
                        "Burgers",
                        "Biryani",
                        "American",
                        "Snacks",
                        "Fast Food",
                      ],
                      avgRating: 4.1,
                      feeDetails: {
                        restaurantId: "26723",
                        fees: [
                          {
                            name: "BASE_DISTANCE",
                            fee: 4500,
                          },
                          {
                            name: "BASE_TIME",
                          },
                          {
                            name: "ANCILLARY_SURGE_FEE",
                          },
                        ],
                        totalFee: 4500,
                      },
                      parentId: "547",
                      avgRatingString: "4.1",
                      totalRatingsString: "5K+",
                      sla: {
                        deliveryTime: 19,
                        lastMileTravel: 2.2,
                        serviceability: "SERVICEABLE",
                        slaString: "19 mins",
                        lastMileTravelString: "2.2 km",
                        iconType: "ICON_TYPE_EMPTY",
                      },
                      availability: {
                        nextCloseTime: "2023-09-19 05:00:00",
                        opened: true,
                      },
                      badges: {},
                      isOpen: true,
                      type: "F",
                      badgesV2: {
                        entityBadges: {
                          imageBased: {},
                          textBased: {},
                          textExtendedBadges: {},
                        },
                      },
                      aggregatedDiscountInfoV3: {
                        header: "20% OFF",
                        subHeader: "UPTO ₹50",
                      },
                      differentiatedUi: {
                        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        differentiatedUiMediaDetails: {
                          mediaType: "ADS_MEDIA_ENUM_IMAGE",
                          lottie: {},
                          video: {},
                        },
                      },
                      reviewsSummary: {},
                      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      restaurantOfferPresentationInfo: {},
                    },
                    analytics: {},
                    cta: {
                      link: "https://www.swiggy.com/restaurants/kfc-sector-3-rohini-delhi-26723",
                      type: "WEBLINK",
                    },
                  },
                  {
                    info: {
                      id: "325746",
                      name: "Mr. Singh Pizzeria",
                      cloudinaryImageId: "qyynqq7slo9g32gfdrim",
                      locality: "Wazirpur Industrial Area",
                      areaName: "Wazirpur",
                      costForTwo: "₹450 for two",
                      cuisines: ["Pizzas", "Italian", "Continental", "Pastas"],
                      avgRating: 3.9,
                      feeDetails: {
                        restaurantId: "325746",
                        fees: [
                          {
                            name: "BASE_DISTANCE",
                            fee: 10600,
                          },
                          {
                            name: "BASE_TIME",
                          },
                          {
                            name: "ANCILLARY_SURGE_FEE",
                          },
                        ],
                        totalFee: 10600,
                      },
                      parentId: "305614",
                      avgRatingString: "3.9",
                      totalRatingsString: "1K+",
                      sla: {
                        deliveryTime: 35,
                        lastMileTravel: 8.8,
                        serviceability: "SERVICEABLE",
                        slaString: "35 mins",
                        lastMileTravelString: "8.8 km",
                        iconType: "ICON_TYPE_EMPTY",
                      },
                      availability: {
                        nextCloseTime: "2023-09-19 03:30:00",
                        opened: true,
                      },
                      badges: {},
                      isOpen: true,
                      type: "F",
                      badgesV2: {
                        entityBadges: {
                          imageBased: {},
                          textBased: {},
                          textExtendedBadges: {},
                        },
                      },
                      aggregatedDiscountInfoV3: {
                        header: "50% OFF",
                        subHeader: "UPTO ₹100",
                      },
                      differentiatedUi: {
                        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        differentiatedUiMediaDetails: {
                          mediaType: "ADS_MEDIA_ENUM_IMAGE",
                          lottie: {},
                          video: {},
                        },
                      },
                      reviewsSummary: {},
                      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      restaurantOfferPresentationInfo: {},
                    },
                    analytics: {},
                    cta: {
                      link: "https://www.swiggy.com/restaurants/mr-singh-pizzeria-industrial-area-wazirpur-delhi-325746",
                      type: "WEBLINK",
                    },
                  },
                  {
                    info: {
                      id: "93959",
                      name: "The Burger Club",
                      cloudinaryImageId: "niwdjtisvbvctdu1lpvh",
                      locality: "Rani Bagh",
                      areaName: "Pitampura",
                      costForTwo: "₹250 for two",
                      cuisines: ["American", "Beverages", "Desserts"],
                      avgRating: 4.2,
                      feeDetails: {
                        restaurantId: "93959",
                        fees: [
                          {
                            name: "BASE_TIME",
                          },
                          {
                            name: "BASE_DISTANCE",
                            fee: 6600,
                          },
                          {
                            name: "ANCILLARY_SURGE_FEE",
                          },
                        ],
                        totalFee: 6600,
                      },
                      parentId: "2285",
                      avgRatingString: "4.2",
                      totalRatingsString: "10K+",
                      sla: {
                        deliveryTime: 23,
                        lastMileTravel: 5,
                        serviceability: "SERVICEABLE",
                        slaString: "23 mins",
                        lastMileTravelString: "5.0 km",
                        iconType: "ICON_TYPE_EMPTY",
                      },
                      availability: {
                        nextCloseTime: "2023-09-19 04:00:00",
                        opened: true,
                      },
                      badges: {},
                      isOpen: true,
                      type: "F",
                      badgesV2: {
                        entityBadges: {
                          imageBased: {},
                          textBased: {},
                          textExtendedBadges: {},
                        },
                      },
                      aggregatedDiscountInfoV3: {
                        header: "₹125 OFF",
                        subHeader: "ABOVE ₹249",
                        discountTag: "FLAT DEAL",
                      },
                      differentiatedUi: {
                        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        differentiatedUiMediaDetails: {
                          mediaType: "ADS_MEDIA_ENUM_IMAGE",
                          lottie: {},
                          video: {},
                        },
                      },
                      reviewsSummary: {},
                      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      restaurantOfferPresentationInfo: {},
                    },
                    analytics: {},
                    cta: {
                      link: "https://www.swiggy.com/restaurants/the-burger-club-rani-bagh-pitampura-delhi-93959",
                      type: "WEBLINK",
                    },
                  },
                  {
                    info: {
                      id: "416830",
                      name: "Louis Burger",
                      cloudinaryImageId: "19d3d352cc815b9d88b22617b41fa97b",
                      locality: "Najafgarh Road",
                      areaName: "Rajouri Garden",
                      costForTwo: "₹600 for two",
                      cuisines: ["Burgers", "American", "Fast Food"],
                      avgRating: 4.3,
                      feeDetails: {
                        restaurantId: "416830",
                        fees: [
                          {
                            name: "BASE_DISTANCE",
                            fee: 12100,
                          },
                          {
                            name: "BASE_TIME",
                          },
                          {
                            name: "ANCILLARY_SURGE_FEE",
                          },
                        ],
                        totalFee: 12100,
                      },
                      parentId: "22485",
                      avgRatingString: "4.3",
                      totalRatingsString: "1K+",
                      sla: {
                        deliveryTime: 33,
                        lastMileTravel: 9.8,
                        serviceability: "SERVICEABLE",
                        slaString: "33 mins",
                        lastMileTravelString: "9.8 km",
                        iconType: "ICON_TYPE_EMPTY",
                      },
                      availability: {
                        nextCloseTime: "2023-09-19 04:00:00",
                        opened: true,
                      },
                      badges: {
                        imageBadges: [
                          {
                            imageId: "newg.png",
                            description: "Gourmet",
                          },
                        ],
                      },
                      isOpen: true,
                      type: "F",
                      badgesV2: {
                        entityBadges: {
                          imageBased: {
                            badgeObject: [
                              {
                                attributes: {
                                  description: "Gourmet",
                                  imageId: "newg.png",
                                },
                              },
                            ],
                          },
                          textBased: {},
                          textExtendedBadges: {},
                        },
                      },
                      aggregatedDiscountInfoV3: {
                        header: "₹125 OFF",
                        subHeader: "ABOVE ₹249",
                        discountTag: "FLAT DEAL",
                      },
                      differentiatedUi: {
                        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        differentiatedUiMediaDetails: {
                          mediaType: "ADS_MEDIA_ENUM_IMAGE",
                          lottie: {},
                          video: {},
                        },
                      },
                      reviewsSummary: {},
                      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      restaurantOfferPresentationInfo: {},
                    },
                    analytics: {},
                    cta: {
                      link: "https://www.swiggy.com/restaurants/louis-burger-najafgarh-road-rajouri-garden-delhi-416830",
                      type: "WEBLINK",
                    },
                  },
                  {
                    info: {
                      id: "91817",
                      name: "Burgrill - The Win Win Burger",
                      cloudinaryImageId: "ummpcdyxxeq8wb945sno",
                      locality: "Pitampura",
                      areaName: "Pitampura",
                      costForTwo: "₹250 for two",
                      cuisines: [
                        "Burgers",
                        "Healthy Food",
                        "Salads",
                        "Beverages",
                        "Desserts",
                        "Snacks",
                      ],
                      avgRating: 4.2,
                      feeDetails: {
                        restaurantId: "91817",
                        fees: [
                          {
                            name: "BASE_TIME",
                          },
                          {
                            name: "BASE_DISTANCE",
                            fee: 5600,
                          },
                          {
                            name: "ANCILLARY_SURGE_FEE",
                          },
                        ],
                        totalFee: 5600,
                      },
                      parentId: "302366",
                      avgRatingString: "4.2",
                      totalRatingsString: "5K+",
                      sla: {
                        deliveryTime: 21,
                        lastMileTravel: 4.4,
                        serviceability: "SERVICEABLE",
                        slaString: "21 mins",
                        lastMileTravelString: "4.4 km",
                        iconType: "ICON_TYPE_EMPTY",
                      },
                      availability: {
                        nextCloseTime: "2023-09-19 05:00:00",
                        opened: true,
                      },
                      badges: {
                        textExtendedBadges: [
                          {
                            iconId: "guiltfree/GF_Logo_android_3x",
                            shortDescription: "options available",
                            fontColor: "#7E808C",
                          },
                        ],
                      },
                      isOpen: true,
                      type: "F",
                      badgesV2: {
                        entityBadges: {
                          imageBased: {},
                          textBased: {},
                          textExtendedBadges: {
                            badgeObject: [
                              {
                                attributes: {
                                  description: "",
                                  fontColor: "#7E808C",
                                  iconId: "guiltfree/GF_Logo_android_3x",
                                  shortDescription: "options available",
                                },
                              },
                            ],
                          },
                        },
                      },
                      aggregatedDiscountInfoV3: {
                        header: "60% OFF",
                        subHeader: "UPTO ₹120",
                      },
                      differentiatedUi: {
                        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        differentiatedUiMediaDetails: {
                          mediaType: "ADS_MEDIA_ENUM_IMAGE",
                          lottie: {},
                          video: {},
                        },
                      },
                      reviewsSummary: {},
                      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      restaurantOfferPresentationInfo: {},
                    },
                    analytics: {},
                    cta: {
                      link: "https://www.swiggy.com/restaurants/burgrill-the-win-win-burger-pitampura-delhi-91817",
                      type: "WEBLINK",
                    },
                  },
                  {
                    info: {
                      id: "168043",
                      name: "Burger Singh (Big Punjabi Burgers)",
                      cloudinaryImageId: "fyuyd6jokqveketdmzpn",
                      locality: "Sector 10",
                      areaName: "Rohini",
                      costForTwo: "₹300 for two",
                      cuisines: ["American", "Fast Food", "Snacks"],
                      avgRating: 4,
                      feeDetails: {
                        restaurantId: "168043",
                        fees: [
                          {
                            name: "BASE_TIME",
                          },
                          {
                            name: "BASE_DISTANCE",
                            fee: 4000,
                          },
                          {
                            name: "ANCILLARY_SURGE_FEE",
                          },
                        ],
                        totalFee: 4000,
                      },
                      parentId: "375065",
                      avgRatingString: "4.0",
                      totalRatingsString: "10K+",
                      sla: {
                        deliveryTime: 19,
                        lastMileTravel: 2,
                        serviceability: "SERVICEABLE",
                        slaString: "19 mins",
                        lastMileTravelString: "2.0 km",
                        iconType: "ICON_TYPE_EMPTY",
                      },
                      availability: {
                        nextCloseTime: "2023-09-19 04:00:00",
                        opened: true,
                      },
                      badges: {},
                      isOpen: true,
                      type: "F",
                      badgesV2: {
                        entityBadges: {
                          imageBased: {},
                          textBased: {},
                          textExtendedBadges: {},
                        },
                      },
                      aggregatedDiscountInfoV3: {
                        header: "₹125 OFF",
                        subHeader: "ABOVE ₹249",
                        discountTag: "FLAT DEAL",
                      },
                      differentiatedUi: {
                        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        differentiatedUiMediaDetails: {
                          mediaType: "ADS_MEDIA_ENUM_IMAGE",
                          lottie: {},
                          video: {},
                        },
                      },
                      reviewsSummary: {},
                      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      restaurantOfferPresentationInfo: {},
                    },
                    analytics: {},
                    cta: {
                      link: "https://www.swiggy.com/restaurants/burger-singh-big-punjabi-burgers-sector-10-rohini-delhi-168043",
                      type: "WEBLINK",
                    },
                  },
                  {
                    info: {
                      id: "346473",
                      name: "Burgerama",
                      cloudinaryImageId: "447000031123d5d8afe27ce7ed6ad556",
                      locality: "Rajouri Garden Extension",
                      areaName: "Rajouri Garden",
                      costForTwo: "₹600 for two",
                      cuisines: ["American"],
                      avgRating: 4.1,
                      feeDetails: {
                        restaurantId: "346473",
                        fees: [
                          {
                            name: "BASE_DISTANCE",
                            fee: 12100,
                          },
                          {
                            name: "BASE_TIME",
                          },
                          {
                            name: "ANCILLARY_SURGE_FEE",
                          },
                        ],
                        totalFee: 12100,
                      },
                      parentId: "8993",
                      avgRatingString: "4.1",
                      totalRatingsString: "1K+",
                      sla: {
                        deliveryTime: 28,
                        lastMileTravel: 9.1,
                        serviceability: "SERVICEABLE",
                        slaString: "28 mins",
                        lastMileTravelString: "9.1 km",
                        iconType: "ICON_TYPE_EMPTY",
                      },
                      availability: {
                        nextCloseTime: "2023-09-19 04:00:00",
                        opened: true,
                      },
                      badges: {
                        imageBadges: [
                          {
                            imageId: "newg.png",
                            description: "Gourmet",
                          },
                        ],
                      },
                      isOpen: true,
                      type: "F",
                      badgesV2: {
                        entityBadges: {
                          imageBased: {
                            badgeObject: [
                              {
                                attributes: {
                                  description: "Gourmet",
                                  imageId: "newg.png",
                                },
                              },
                            ],
                          },
                          textBased: {},
                          textExtendedBadges: {},
                        },
                      },
                      aggregatedDiscountInfoV3: {
                        header: "50% OFF",
                        subHeader: "UPTO ₹100",
                      },
                      differentiatedUi: {
                        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        differentiatedUiMediaDetails: {
                          mediaType: "ADS_MEDIA_ENUM_IMAGE",
                          lottie: {},
                          video: {},
                        },
                      },
                      reviewsSummary: {},
                      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      restaurantOfferPresentationInfo: {},
                    },
                    analytics: {},
                    cta: {
                      link: "https://www.swiggy.com/restaurants/burgerama-extension-rajouri-garden-delhi-346473",
                      type: "WEBLINK",
                    },
                  },
                  {
                    info: {
                      id: "24162",
                      name: "Domino's Pizza",
                      cloudinaryImageId: "oiw7cx0apvp7as1oxufg",
                      locality: "Sector 3",
                      areaName: "Rohini",
                      costForTwo: "₹400 for two",
                      cuisines: ["Pizzas", "Italian", "Pastas", "Desserts"],
                      avgRating: 4.4,
                      feeDetails: {
                        restaurantId: "24162",
                        fees: [
                          {
                            name: "BASE_TIME",
                          },
                          {
                            name: "BASE_DISTANCE",
                            fee: 4000,
                          },
                          {
                            name: "ANCILLARY_SURGE_FEE",
                          },
                        ],
                        totalFee: 4000,
                      },
                      parentId: "2456",
                      avgRatingString: "4.4",
                      totalRatingsString: "10K+",
                      sla: {
                        deliveryTime: 30,
                        serviceability: "SERVICEABLE",
                        slaString: "30 mins",
                        iconType: "ICON_TYPE_EMPTY",
                      },
                      availability: {
                        nextCloseTime: "2023-09-19 02:55:00",
                        opened: true,
                      },
                      badges: {},
                      isOpen: true,
                      type: "F",
                      badgesV2: {
                        entityBadges: {
                          imageBased: {},
                          textBased: {},
                          textExtendedBadges: {},
                        },
                      },
                      aggregatedDiscountInfoV3: {
                        header: "₹100 OFF",
                        subHeader: "ABOVE ₹999",
                        discountTag: "FLAT DEAL",
                      },
                      differentiatedUi: {
                        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        differentiatedUiMediaDetails: {
                          mediaType: "ADS_MEDIA_ENUM_IMAGE",
                          lottie: {},
                          video: {},
                        },
                      },
                      reviewsSummary: {},
                      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      restaurantOfferPresentationInfo: {},
                    },
                    analytics: {},
                    cta: {
                      link: "https://www.swiggy.com/restaurants/dominos-pizza-sector-3-rohini-delhi-24162",
                      type: "WEBLINK",
                    },
                  },
                  {
                    info: {
                      id: "13103",
                      name: "Berco's -If you love Chinese",
                      cloudinaryImageId: "tpep2upccqy9nkd4v2gh",
                      locality: "Rohini",
                      areaName: "Rohini",
                      costForTwo: "₹600 for two",
                      cuisines: [
                        "Asian",
                        "Thai",
                        "Chinese",
                        "Seafood",
                        "Desserts",
                        "Beverages",
                      ],
                      avgRating: 4.1,
                      feeDetails: {
                        restaurantId: "13103",
                        fees: [
                          {
                            name: "BASE_DISTANCE",
                            fee: 4500,
                          },
                          {
                            name: "BASE_TIME",
                          },
                          {
                            name: "ANCILLARY_SURGE_FEE",
                          },
                        ],
                        totalFee: 4500,
                      },
                      parentId: "108",
                      avgRatingString: "4.1",
                      totalRatingsString: "5K+",
                      sla: {
                        deliveryTime: 23,
                        lastMileTravel: 2.8,
                        serviceability: "SERVICEABLE",
                        slaString: "23 mins",
                        lastMileTravelString: "2.8 km",
                        iconType: "ICON_TYPE_EMPTY",
                      },
                      availability: {
                        nextCloseTime: "2023-09-19 02:00:00",
                        opened: true,
                      },
                      badges: {
                        imageBadges: [
                          {
                            imageId: "newg.png",
                            description: "Gourmet",
                          },
                        ],
                      },
                      isOpen: true,
                      type: "F",
                      badgesV2: {
                        entityBadges: {
                          imageBased: {
                            badgeObject: [
                              {
                                attributes: {
                                  description: "Gourmet",
                                  imageId: "newg.png",
                                },
                              },
                            ],
                          },
                          textBased: {},
                          textExtendedBadges: {},
                        },
                      },
                      aggregatedDiscountInfoV3: {
                        header: "30% OFF",
                        subHeader: "UPTO ₹75",
                      },
                      differentiatedUi: {
                        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        differentiatedUiMediaDetails: {
                          mediaType: "ADS_MEDIA_ENUM_IMAGE",
                          lottie: {},
                          video: {},
                        },
                      },
                      reviewsSummary: {},
                      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      restaurantOfferPresentationInfo: {},
                    },
                    analytics: {},
                    cta: {
                      link: "https://www.swiggy.com/restaurants/bercos-if-you-love-chinese-rohini-delhi-13103",
                      type: "WEBLINK",
                    },
                  },
                  {
                    info: {
                      id: "119524",
                      name: "Nirula's",
                      cloudinaryImageId: "tsedcujivbntbyjxnki3",
                      locality: "B 1 Block",
                      areaName: "Paschim Vihar",
                      costForTwo: "₹500 for two",
                      cuisines: [
                        "Desserts",
                        "Ice Cream",
                        "Beverages",
                        "Ice Cream Cakes",
                        "Juices",
                      ],
                      avgRating: 4.5,
                      feeDetails: {
                        restaurantId: "119524",
                        fees: [
                          {
                            name: "BASE_DISTANCE",
                            fee: 7100,
                          },
                          {
                            name: "BASE_TIME",
                          },
                          {
                            name: "ANCILLARY_SURGE_FEE",
                          },
                        ],
                        totalFee: 7100,
                      },
                      parentId: "1738",
                      avgRatingString: "4.5",
                      totalRatingsString: "1K+",
                      sla: {
                        deliveryTime: 21,
                        lastMileTravel: 5.9,
                        serviceability: "SERVICEABLE",
                        slaString: "21 mins",
                        lastMileTravelString: "5.9 km",
                        iconType: "ICON_TYPE_EMPTY",
                      },
                      availability: {
                        nextCloseTime: "2023-09-19 02:00:00",
                        opened: true,
                      },
                      badges: {
                        textExtendedBadges: [
                          {
                            iconId: "guiltfree/GF_Logo_android_3x",
                            shortDescription: "options available",
                            fontColor: "#7E808C",
                          },
                        ],
                      },
                      isOpen: true,
                      aggregatedDiscountInfoV2: {},
                      type: "F",
                      badgesV2: {
                        entityBadges: {
                          imageBased: {},
                          textBased: {},
                          textExtendedBadges: {
                            badgeObject: [
                              {
                                attributes: {
                                  description: "",
                                  fontColor: "#7E808C",
                                  iconId: "guiltfree/GF_Logo_android_3x",
                                  shortDescription: "options available",
                                },
                              },
                            ],
                          },
                        },
                      },
                      differentiatedUi: {
                        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        differentiatedUiMediaDetails: {
                          mediaType: "ADS_MEDIA_ENUM_IMAGE",
                          lottie: {},
                          video: {},
                        },
                      },
                      reviewsSummary: {},
                      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      restaurantOfferPresentationInfo: {},
                    },
                    analytics: {},
                    cta: {
                      link: "https://www.swiggy.com/restaurants/nirulas-b-1-block-paschim-vihar-delhi-119524",
                      type: "WEBLINK",
                    },
                  },
                  {
                    info: {
                      id: "396102",
                      name: "NOTO - Healthy Ice Cream",
                      cloudinaryImageId: "544f9e6dce1efb7054e4ac5d98aba049",
                      locality: "A Block",
                      areaName: "Rajouri Garden",
                      costForTwo: "₹250 for two",
                      cuisines: ["Ice Cream"],
                      avgRating: 4.3,
                      veg: true,
                      feeDetails: {
                        restaurantId: "396102",
                        fees: [
                          {
                            name: "BASE_TIME",
                          },
                          {
                            name: "BASE_DISTANCE",
                            fee: 10100,
                          },
                          {
                            name: "ANCILLARY_SURGE_FEE",
                          },
                        ],
                        totalFee: 10100,
                      },
                      parentId: "7158",
                      avgRatingString: "4.3",
                      totalRatingsString: "500+",
                      sla: {
                        deliveryTime: 26,
                        lastMileTravel: 8.8,
                        serviceability: "SERVICEABLE",
                        slaString: "26 mins",
                        lastMileTravelString: "8.8 km",
                        iconType: "ICON_TYPE_EMPTY",
                      },
                      availability: {
                        nextCloseTime: "2023-09-19 02:30:00",
                        opened: true,
                      },
                      badges: {},
                      isOpen: true,
                      type: "F",
                      badgesV2: {
                        entityBadges: {
                          imageBased: {},
                          textBased: {},
                          textExtendedBadges: {},
                        },
                      },
                      aggregatedDiscountInfoV3: {
                        header: "₹125 OFF",
                        subHeader: "ABOVE ₹499",
                        discountTag: "FLAT DEAL",
                      },
                      differentiatedUi: {
                        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        differentiatedUiMediaDetails: {
                          mediaType: "ADS_MEDIA_ENUM_IMAGE",
                          lottie: {},
                          video: {},
                        },
                      },
                      reviewsSummary: {},
                      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      restaurantOfferPresentationInfo: {},
                    },
                    analytics: {},
                    cta: {
                      link: "https://www.swiggy.com/restaurants/noto-healthy-ice-cream-a-block-rajouri-garden-delhi-396102",
                      type: "WEBLINK",
                    },
                  },
                  {
                    info: {
                      id: "4472",
                      name: "34 Chowringhee Lane (Jail Road)",
                      cloudinaryImageId: "kyj4oipw9dqteylncgfz",
                      locality: "Janakpuri",
                      areaName: "Jail Road",
                      costForTwo: "₹200 for two",
                      cuisines: [
                        "Fast Food",
                        "Snacks",
                        "Chinese",
                        "Tandoor",
                        "Punjabi",
                        "Seafood",
                        "Beverages",
                        "Desserts",
                        "Barbecue",
                        "Grill",
                        "Mughlai",
                        "Indian",
                        "North Indian",
                        "Continental",
                      ],
                      avgRating: 4.1,
                      feeDetails: {
                        restaurantId: "4472",
                        fees: [
                          {
                            name: "BASE_TIME",
                          },
                          {
                            name: "BASE_DISTANCE",
                            fee: 11600,
                          },
                          {
                            name: "ANCILLARY_SURGE_FEE",
                          },
                        ],
                        totalFee: 11600,
                      },
                      parentId: "11",
                      avgRatingString: "4.1",
                      totalRatingsString: "10K+",
                      sla: {
                        deliveryTime: 28,
                        lastMileTravel: 9.4,
                        serviceability: "SERVICEABLE",
                        slaString: "28 mins",
                        lastMileTravelString: "9.4 km",
                        iconType: "ICON_TYPE_EMPTY",
                      },
                      availability: {
                        nextCloseTime: "2023-09-19 04:00:00",
                        opened: true,
                      },
                      badges: {},
                      isOpen: true,
                      aggregatedDiscountInfoV2: {},
                      type: "F",
                      badgesV2: {
                        entityBadges: {
                          imageBased: {},
                          textBased: {},
                          textExtendedBadges: {},
                        },
                      },
                      differentiatedUi: {
                        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        differentiatedUiMediaDetails: {
                          mediaType: "ADS_MEDIA_ENUM_IMAGE",
                          lottie: {},
                          video: {},
                        },
                      },
                      reviewsSummary: {},
                      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      restaurantOfferPresentationInfo: {},
                    },
                    analytics: {},
                    cta: {
                      link: "https://www.swiggy.com/restaurants/34-chowringhee-lane-jail-road-janakpuri-jail-road-delhi-4472",
                      type: "WEBLINK",
                    },
                  },
                  {
                    info: {
                      id: "546073",
                      name: "Vadilal Ice Creams",
                      cloudinaryImageId: "jl3dgzqss2b0pfc6rpaa",
                      locality: "Rithala",
                      areaName: "Rohini",
                      costForTwo: "₹200 for two",
                      cuisines: ["Ice Cream", "Desserts"],
                      avgRating: 4.4,
                      veg: true,
                      feeDetails: {
                        restaurantId: "546073",
                        fees: [
                          {
                            name: "BASE_TIME",
                          },
                          {
                            name: "BASE_DISTANCE",
                            fee: 6600,
                          },
                          {
                            name: "ANCILLARY_SURGE_FEE",
                          },
                        ],
                        totalFee: 6600,
                      },
                      parentId: "11745",
                      avgRatingString: "4.4",
                      totalRatingsString: "100+",
                      sla: {
                        deliveryTime: 22,
                        lastMileTravel: 5.6,
                        serviceability: "SERVICEABLE",
                        slaString: "22 mins",
                        lastMileTravelString: "5.6 km",
                        iconType: "ICON_TYPE_EMPTY",
                      },
                      availability: {
                        nextCloseTime: "2023-09-19 02:30:00",
                        opened: true,
                      },
                      badges: {},
                      isOpen: true,
                      aggregatedDiscountInfoV2: {},
                      type: "F",
                      badgesV2: {
                        entityBadges: {
                          imageBased: {},
                          textBased: {},
                          textExtendedBadges: {},
                        },
                      },
                      differentiatedUi: {
                        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        differentiatedUiMediaDetails: {
                          mediaType: "ADS_MEDIA_ENUM_IMAGE",
                          lottie: {},
                          video: {},
                        },
                      },
                      reviewsSummary: {},
                      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      restaurantOfferPresentationInfo: {},
                    },
                    analytics: {},
                    cta: {
                      link: "https://www.swiggy.com/restaurants/vadilal-ice-creams-rithala-rohini-delhi-546073",
                      type: "WEBLINK",
                    },
                  },
                  {
                    info: {
                      id: "422690",
                      name: "The Belgian Waffle Co.",
                      cloudinaryImageId: "8cb220fa3997a3b928d2ffb6c098acaf",
                      locality: "Lala Jagat Narayan Marg",
                      areaName: "Netaji Subhash Place",
                      costForTwo: "₹200 for two",
                      cuisines: ["Waffle", "Desserts", "Ice Cream"],
                      avgRating: 4.1,
                      veg: true,
                      feeDetails: {
                        restaurantId: "422690",
                        fees: [
                          {
                            name: "BASE_DISTANCE",
                            fee: 7600,
                          },
                          {
                            name: "BASE_TIME",
                          },
                          {
                            name: "ANCILLARY_SURGE_FEE",
                          },
                        ],
                        totalFee: 7600,
                      },
                      parentId: "2233",
                      avgRatingString: "4.1",
                      totalRatingsString: "500+",
                      sla: {
                        deliveryTime: 29,
                        lastMileTravel: 6.8,
                        serviceability: "SERVICEABLE",
                        slaString: "29 mins",
                        lastMileTravelString: "6.8 km",
                        iconType: "ICON_TYPE_EMPTY",
                      },
                      availability: {
                        nextCloseTime: "2023-09-19 04:00:00",
                        opened: true,
                      },
                      badges: {},
                      isOpen: true,
                      type: "F",
                      badgesV2: {
                        entityBadges: {
                          imageBased: {},
                          textBased: {},
                          textExtendedBadges: {},
                        },
                      },
                      aggregatedDiscountInfoV3: {
                        header: "20% OFF",
                        subHeader: "UPTO ₹50",
                      },
                      differentiatedUi: {
                        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        differentiatedUiMediaDetails: {
                          mediaType: "ADS_MEDIA_ENUM_IMAGE",
                          lottie: {},
                          video: {},
                        },
                      },
                      reviewsSummary: {},
                      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      restaurantOfferPresentationInfo: {},
                    },
                    analytics: {},
                    cta: {
                      link: "https://www.swiggy.com/restaurants/the-belgian-waffle-co-lala-jagat-narayan-marg-netaji-subhash-place-delhi-422690",
                      type: "WEBLINK",
                    },
                  },
                  {
                    info: {
                      id: "15846",
                      name: "Faasos - Wraps & Rolls",
                      cloudinaryImageId: "af33b81798b11deba338e94b7585d348",
                      locality: "Sector 8",
                      areaName: "Rohini",
                      costForTwo: "₹200 for two",
                      cuisines: [
                        "Kebabs",
                        "Fast Food",
                        "Snacks",
                        "North Indian",
                        "American",
                        "Healthy Food",
                        "Desserts",
                        "Beverages",
                      ],
                      avgRating: 4.2,
                      feeDetails: {
                        restaurantId: "15846",
                        fees: [
                          {
                            name: "BASE_DISTANCE",
                            fee: 4000,
                          },
                          {
                            name: "BASE_TIME",
                          },
                          {
                            name: "ANCILLARY_SURGE_FEE",
                          },
                        ],
                        totalFee: 4000,
                      },
                      parentId: "21809",
                      avgRatingString: "4.2",
                      totalRatingsString: "10K+",
                      sla: {
                        deliveryTime: 24,
                        lastMileTravel: 2.7,
                        serviceability: "SERVICEABLE",
                        slaString: "24 mins",
                        lastMileTravelString: "2.7 km",
                        iconType: "ICON_TYPE_EMPTY",
                      },
                      availability: {
                        nextCloseTime: "2023-09-19 03:00:00",
                        opened: true,
                      },
                      badges: {
                        textExtendedBadges: [
                          {
                            iconId: "guiltfree/GF_Logo_android_3x",
                            shortDescription: "options available",
                            fontColor: "#7E808C",
                          },
                        ],
                      },
                      isOpen: true,
                      type: "F",
                      badgesV2: {
                        entityBadges: {
                          imageBased: {},
                          textBased: {},
                          textExtendedBadges: {
                            badgeObject: [
                              {
                                attributes: {
                                  description: "",
                                  fontColor: "#7E808C",
                                  iconId: "guiltfree/GF_Logo_android_3x",
                                  shortDescription: "options available",
                                },
                              },
                            ],
                          },
                        },
                      },
                      aggregatedDiscountInfoV3: {
                        header: "40% OFF",
                        subHeader: "UPTO ₹80",
                      },
                      differentiatedUi: {
                        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        differentiatedUiMediaDetails: {
                          mediaType: "ADS_MEDIA_ENUM_IMAGE",
                          lottie: {},
                          video: {},
                        },
                      },
                      reviewsSummary: {},
                      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      restaurantOfferPresentationInfo: {},
                    },
                    analytics: {},
                    cta: {
                      link: "https://www.swiggy.com/restaurants/faasos-wraps-and-rolls-sector-8-rohini-delhi-15846",
                      type: "WEBLINK",
                    },
                  },
                  {
                    info: {
                      id: "20970",
                      name: "Oven Story Pizza",
                      cloudinaryImageId: "f986df6f1a1fcf2ff24d2eaf44d570a7",
                      locality: "Sector 8",
                      areaName: "Rohini",
                      costForTwo: "₹400 for two",
                      cuisines: [
                        "Pizzas",
                        "Pastas",
                        "Italian",
                        "Desserts",
                        "Beverages",
                      ],
                      avgRating: 3.9,
                      feeDetails: {
                        restaurantId: "20970",
                        fees: [
                          {
                            name: "BASE_DISTANCE",
                            fee: 4500,
                          },
                          {
                            name: "BASE_TIME",
                          },
                          {
                            name: "ANCILLARY_SURGE_FEE",
                          },
                        ],
                        totalFee: 4500,
                      },
                      parentId: "3534",
                      avgRatingString: "3.9",
                      totalRatingsString: "1K+",
                      sla: {
                        deliveryTime: 28,
                        lastMileTravel: 2.7,
                        serviceability: "SERVICEABLE",
                        slaString: "23-33 mins",
                        lastMileTravelString: "2.7 km",
                        iconType: "ICON_TYPE_EMPTY",
                      },
                      availability: {
                        nextCloseTime: "2023-09-19 03:00:00",
                        opened: true,
                      },
                      badges: {},
                      isOpen: true,
                      type: "F",
                      badgesV2: {
                        entityBadges: {
                          imageBased: {},
                          textBased: {},
                          textExtendedBadges: {},
                        },
                      },
                      aggregatedDiscountInfoV3: {
                        header: "₹125 OFF",
                        subHeader: "ABOVE ₹1099",
                        discountTag: "FLAT DEAL",
                      },
                      differentiatedUi: {
                        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        differentiatedUiMediaDetails: {
                          mediaType: "ADS_MEDIA_ENUM_IMAGE",
                          lottie: {},
                          video: {},
                        },
                      },
                      reviewsSummary: {},
                      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      restaurantOfferPresentationInfo: {},
                    },
                    analytics: {},
                    cta: {
                      link: "https://www.swiggy.com/restaurants/oven-story-pizza-sector-8-rohini-delhi-20970",
                      type: "WEBLINK",
                    },
                  },
                ],
                theme: "Restaurant_Group_WebView_SEO_PB_Theme",
                widgetType: "WIDGET_TYPE_POPULAR_BRANDS",
                style: {
                  width: {
                    type: "TYPE_RELATIVE",
                    value: 0.41111112,
                    reference: "RELATIVE_DIMENSION_REFERENCE_DEVICE_WIDTH",
                  },
                  height: {
                    type: "TYPE_RELATIVE",
                    value: 0.7027027,
                    reference: "RELATIVE_DIMENSION_REFERENCE_WIDTH",
                  },
                  layoutAlignment: "LAYOUT_ALIGNMENT_LEFT",
                },
                collectionId: "84124",
              },
            },
          },
        },
      },
      {
        card: {
          card: {
            "@type": "type.googleapis.com/swiggy.seo.widgets.v1.BasicContent",
            title: "Restaurants with online food delivery in Delhi",
            id: "popular_restaurants_title",
          },
        },
      },
      {
        card: {
          card: {
            "@type":
              "type.googleapis.com/swiggy.gandalf.widgets.v2.InlineViewFilterSortWidget",
            sortConfigs: [
              {
                key: "relevance",
                title: "Relevance (Default)",
                selected: true,
                defaultSelection: true,
              },
              {
                key: "deliveryTimeAsc",
                title: "Delivery Time",
              },
              {
                key: "modelBasedRatingDesc",
                title: "Rating",
              },
              {
                key: "costForTwoAsc",
                title: "Cost: Low to High",
              },
              {
                key: "costForTwoDesc",
                title: "Cost: High to Low",
              },
            ],
            restaurantCount: 1099,
            facetList: [
              {
                label: "Delivery Time",
                id: "deliveryTime",
                selection: "SELECT_TYPE_MULTISELECT",
                facetInfo: [
                  {
                    label: "Fast Delivery",
                    id: "deliveryTimefacetquery1",
                    analytics: {},
                    openFilter: true,
                  },
                ],
                viewType: "VIEW_TYPE_HALF_CARD",
                subLabel: "Filter by",
              },
              {
                label: "Cuisines",
                id: "catalog_cuisines",
                selection: "SELECT_TYPE_MULTISELECT",
                facetInfo: [
                  {
                    label: "Afghani",
                    id: "query_afghani",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "American",
                    id: "query_american",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Andhra",
                    id: "query_andhra",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Arabian",
                    id: "query_arabian",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Asian",
                    id: "query_asian",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Awadhi",
                    id: "query_awadhi",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Bakery",
                    id: "query_bakery",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Barbecue",
                    id: "query_barbecue",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Bengali",
                    id: "query_bengali",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Beverages",
                    id: "query_beverages",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Bihari",
                    id: "query_bihari",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Biryani",
                    id: "query_biryani",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "British",
                    id: "query_british",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Burgers",
                    id: "query_burgers",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Burmese",
                    id: "query_burmese",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Cafe",
                    id: "query_cafe",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Chaat",
                    id: "query_chaat",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Chinese",
                    id: "query_chinese",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Combo",
                    id: "query_combo",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Continental",
                    id: "query_continental",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Desserts",
                    id: "query_desserts",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Fast Food",
                    id: "query_fast_food",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Grill",
                    id: "query_grill",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Healthy Food",
                    id: "query_healthy_food",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Home Food",
                    id: "query_home_food",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Hyderabadi",
                    id: "query_hyderabadi",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Ice Cream",
                    id: "query_ice_cream",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Ice Cream Cakes",
                    id: "query_ice_cream_cakes",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Indian",
                    id: "query_indian",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Italian",
                    id: "query_italian",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Italian-American",
                    id: "query_italian-american",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Japanese",
                    id: "query_japanese",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Juices",
                    id: "query_juices",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Kebabs",
                    id: "query_kebabs",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Keto",
                    id: "query_keto",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Lebanese",
                    id: "query_lebanese",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Lucknowi",
                    id: "query_lucknowi",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Maharashtrian",
                    id: "query_maharashtrian",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Mangalorean",
                    id: "query_mangalorean",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Mexican",
                    id: "query_mexican",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Mughlai",
                    id: "query_mughlai",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Nepalese",
                    id: "query_nepalese",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "North Eastern",
                    id: "query_north_eastern",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "North Indian",
                    id: "query_north_indian",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Oriental",
                    id: "query_oriental",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Paan",
                    id: "query_paan",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Pan-Asian",
                    id: "query_pan-asian",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Pastas",
                    id: "query_pastas",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Pizzas",
                    id: "query_pizzas",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Portuguese",
                    id: "query_portuguese",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Punjabi",
                    id: "query_punjabi",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Rajasthani",
                    id: "query_rajasthani",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Salads",
                    id: "query_salads",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Seafood",
                    id: "query_seafood",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Sindhi",
                    id: "query_sindhi",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Snacks",
                    id: "query_snacks",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "South Indian",
                    id: "query_south_indian",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Street Food",
                    id: "query_street_food",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Sushi",
                    id: "query_sushi",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Sweets",
                    id: "query_sweets",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Tandoor",
                    id: "query_tandoor",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Thai",
                    id: "query_thai",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Thalis",
                    id: "query_thalis",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Tibetan",
                    id: "query_tibetan",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Waffle",
                    id: "query_waffle",
                    analytics: {},
                    openFilter: true,
                  },
                ],
                viewType: "VIEW_TYPE_HALF_CARD",
                canSearch: true,
                subLabel: "Filter by cuisine",
                openFilter: true,
              },
              {
                label: "Explore",
                id: "explore",
                selection: "SELECT_TYPE_MULTISELECT",
                facetInfo: [
                  {
                    label: "New on Swiggy",
                    id: "newfacetquery1",
                    analytics: {},
                    openFilter: true,
                  },
                ],
                viewType: "VIEW_TYPE_HALF_CARD",
              },
              {
                label: "Ratings",
                id: "rating",
                selection: "SELECT_TYPE_MULTISELECT",
                facetInfo: [
                  {
                    label: "Ratings 4.5+",
                    id: "ratingfacetquery3",
                    analytics: {},
                  },
                  {
                    label: "Ratings 4.0+",
                    id: "ratingfacetquery4",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Ratings 3.5+",
                    id: "ratingfacetquery5",
                    analytics: {},
                  },
                ],
                viewType: "VIEW_TYPE_HALF_CARD",
                subLabel: "Filter by",
              },
              {
                label: "Veg/Non-Veg",
                id: "isVeg",
                selection: "SELECT_TYPE_SINGLESELECT",
                facetInfo: [
                  {
                    label: "Pure Veg",
                    id: "isVegfacetquery2",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Non Veg",
                    id: "isVegfacetquery3",
                    analytics: {},
                  },
                ],
                viewType: "VIEW_TYPE_FLATTENED",
                subLabel: "Filter by",
              },
              {
                label: "Offers",
                id: "restaurantOfferMultiTd",
                selection: "SELECT_TYPE_SINGLESELECT",
                facetInfo: [
                  {
                    label: "Offers",
                    id: "restaurantOfferMultiTdfacetquery3",
                    analytics: {},
                    openFilter: true,
                  },
                ],
                viewType: "VIEW_TYPE_FLATTENED",
                subLabel: "Restaurants with",
              },
              {
                label: "Cost for two",
                id: "costForTwo",
                selection: "SELECT_TYPE_MULTISELECT",
                facetInfo: [
                  {
                    label: "Rs. 300-Rs. 600",
                    id: "costForTwofacetquery3",
                    analytics: {},
                    openFilter: true,
                  },
                  {
                    label: "Greater than Rs. 600",
                    id: "costForTwofacetquery4",
                    analytics: {},
                  },
                  {
                    label: "Less than Rs. 300",
                    id: "costForTwofacetquery5",
                    analytics: {},
                    openFilter: true,
                  },
                ],
                viewType: "VIEW_TYPE_HALF_CARD",
                subLabel: "Filter by",
              },
            ],
          },
        },
      },
      {
        card: {
          card: {
            "@type": "type.googleapis.com/swiggy.gandalf.widgets.v2.GridWidget",
            layout: {
              columns: 4,
            },
            id: "restaurant_grid_listing",
            gridElements: {
              infoWithStyle: {
                "@type":
                  "type.googleapis.com/swiggy.presentation.food.v2.FavouriteRestaurantInfoWithStyle",
                restaurants: [
                  {
                    info: {
                      id: "498382",
                      name: "Burger King",
                      cloudinaryImageId: "e33e1d3ba7d6b2bb0d45e1001b731fcf",
                      locality: "M2K Mall",
                      areaName: "Rohini",
                      costForTwo: "₹350 for two",
                      cuisines: ["Burgers", "American"],
                      avgRating: 4.3,
                      feeDetails: {
                        restaurantId: "498382",
                        fees: [
                          {
                            name: "BASE_DISTANCE",
                            fee: 4000,
                          },
                          {
                            name: "BASE_TIME",
                          },
                          {
                            name: "ANCILLARY_SURGE_FEE",
                          },
                        ],
                        totalFee: 4000,
                      },
                      parentId: "166",
                      avgRatingString: "4.3",
                      totalRatingsString: "1K+",
                      sla: {
                        deliveryTime: 23,
                        lastMileTravel: 2,
                        serviceability: "SERVICEABLE",
                        slaString: "23 mins",
                        lastMileTravelString: "2.0 km",
                        iconType: "ICON_TYPE_EMPTY",
                      },
                      availability: {
                        nextCloseTime: "2023-09-19 03:00:00",
                        opened: true,
                      },
                      badges: {},
                      isOpen: true,
                      type: "F",
                      badgesV2: {
                        entityBadges: {
                          imageBased: {},
                          textBased: {},
                          textExtendedBadges: {},
                        },
                      },
                      aggregatedDiscountInfoV3: {
                        header: "60% OFF",
                        subHeader: "UPTO ₹120",
                      },
                      orderabilityCommunication: {
                        title: {},
                        subTitle: {},
                        message: {},
                        customIcon: {},
                      },
                      differentiatedUi: {
                        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        differentiatedUiMediaDetails: {
                          mediaType: "ADS_MEDIA_ENUM_IMAGE",
                          lottie: {},
                          video: {},
                        },
                      },
                      reviewsSummary: {},
                      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      restaurantOfferPresentationInfo: {},
                    },
                    analytics: {
                      context: "seo-data-8f46cf41-7a52-41db-841b-ac92648985b3",
                    },
                    cta: {
                      link: "https://www.swiggy.com/restaurants/burger-king-m2k-mall-rohini-delhi-498382",
                      text: "RESTAURANT_MENU",
                      type: "WEBLINK",
                    },
                    widgetId:
                      "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
                  },
                  {
                    info: {
                      id: "356627",
                      name: "Rollsome",
                      cloudinaryImageId: "d2zhmkic7glofbpvzqt1",
                      locality: "Naharpur",
                      areaName: "Rohini",
                      costForTwo: "₹250 for two",
                      cuisines: ["Fast Food", "Snacks", "Street Food"],
                      avgRating: 4,
                      feeDetails: {
                        restaurantId: "356627",
                        fees: [
                          {
                            name: "BASE_DISTANCE",
                            fee: 4000,
                          },
                          {
                            name: "BASE_TIME",
                          },
                          {
                            name: "ANCILLARY_SURGE_FEE",
                          },
                        ],
                        totalFee: 4000,
                      },
                      parentId: "171215",
                      avgRatingString: "4.0",
                      totalRatingsString: "1K+",
                      sla: {
                        deliveryTime: 22,
                        lastMileTravel: 2.4,
                        serviceability: "SERVICEABLE",
                        slaString: "22 mins",
                        lastMileTravelString: "2.4 km",
                        iconType: "ICON_TYPE_EMPTY",
                      },
                      availability: {
                        nextCloseTime: "2023-09-19 03:45:00",
                        opened: true,
                      },
                      badges: {},
                      isOpen: true,
                      type: "F",
                      badgesV2: {
                        entityBadges: {
                          imageBased: {},
                          textBased: {},
                          textExtendedBadges: {},
                        },
                      },
                      aggregatedDiscountInfoV3: {
                        header: "₹125 OFF",
                        subHeader: "ABOVE ₹249",
                        discountTag: "FLAT DEAL",
                      },
                      orderabilityCommunication: {
                        title: {},
                        subTitle: {},
                        message: {},
                        customIcon: {},
                      },
                      differentiatedUi: {
                        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        differentiatedUiMediaDetails: {
                          mediaType: "ADS_MEDIA_ENUM_IMAGE",
                          lottie: {},
                          video: {},
                        },
                      },
                      reviewsSummary: {},
                      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      restaurantOfferPresentationInfo: {},
                    },
                    analytics: {
                      context: "seo-data-8f46cf41-7a52-41db-841b-ac92648985b3",
                    },
                    cta: {
                      link: "https://www.swiggy.com/restaurants/rollsome-naharpur-rohini-delhi-356627",
                      text: "RESTAURANT_MENU",
                      type: "WEBLINK",
                    },
                    widgetId:
                      "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
                  },
                  {
                    info: {
                      id: "349931",
                      name: "Billu's Pasta Hut",
                      cloudinaryImageId: "hd6uixw1ykomliddvyap",
                      locality: "Aggarwal Metro Heights",
                      areaName: "Netaji Subhash Place",
                      costForTwo: "₹150 for two",
                      cuisines: ["Continental", "Pizzas", "Italian"],
                      avgRating: 3.8,
                      feeDetails: {
                        restaurantId: "349931",
                        fees: [
                          {
                            name: "BASE_TIME",
                          },
                          {
                            name: "BASE_DISTANCE",
                            fee: 7600,
                          },
                          {
                            name: "ANCILLARY_SURGE_FEE",
                          },
                        ],
                        totalFee: 7600,
                      },
                      parentId: "46040",
                      avgRatingString: "3.8",
                      totalRatingsString: "5K+",
                      sla: {
                        deliveryTime: 29,
                        lastMileTravel: 6.8,
                        serviceability: "SERVICEABLE",
                        slaString: "29 mins",
                        lastMileTravelString: "6.8 km",
                        iconType: "ICON_TYPE_EMPTY",
                      },
                      availability: {
                        nextCloseTime: "2023-09-19 05:00:00",
                        opened: true,
                      },
                      badges: {},
                      isOpen: true,
                      type: "F",
                      badgesV2: {
                        entityBadges: {
                          imageBased: {},
                          textBased: {},
                          textExtendedBadges: {},
                        },
                      },
                      aggregatedDiscountInfoV3: {
                        header: "₹125 OFF",
                        subHeader: "ABOVE ₹249",
                        discountTag: "FLAT DEAL",
                      },
                      orderabilityCommunication: {
                        title: {},
                        subTitle: {},
                        message: {},
                        customIcon: {},
                      },
                      differentiatedUi: {
                        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        differentiatedUiMediaDetails: {
                          mediaType: "ADS_MEDIA_ENUM_IMAGE",
                          lottie: {},
                          video: {},
                        },
                      },
                      reviewsSummary: {},
                      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      restaurantOfferPresentationInfo: {},
                    },
                    analytics: {
                      context: "seo-data-8f46cf41-7a52-41db-841b-ac92648985b3",
                    },
                    cta: {
                      link: "https://www.swiggy.com/restaurants/billus-pasta-hut-aggarwal-metro-heights-netaji-subhash-place-delhi-349931",
                      text: "RESTAURANT_MENU",
                      type: "WEBLINK",
                    },
                    widgetId:
                      "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
                  },
                  {
                    info: {
                      id: "175782",
                      name: "Go Pappe",
                      cloudinaryImageId: "oatgpxnuuezpzfvwcuma",
                      locality: "Sector 6",
                      areaName: "Rohini",
                      costForTwo: "₹300 for two",
                      cuisines: ["North Indian", "Chinese", "Snacks"],
                      avgRating: 3.8,
                      feeDetails: {
                        restaurantId: "175782",
                        fees: [
                          {
                            name: "BASE_TIME",
                          },
                          {
                            name: "BASE_DISTANCE",
                            fee: 4000,
                          },
                          {
                            name: "ANCILLARY_SURGE_FEE",
                          },
                        ],
                        totalFee: 4000,
                      },
                      parentId: "16483",
                      avgRatingString: "3.8",
                      totalRatingsString: "5K+",
                      sla: {
                        deliveryTime: 23,
                        lastMileTravel: 1.1,
                        serviceability: "SERVICEABLE",
                        slaString: "23 mins",
                        lastMileTravelString: "1.1 km",
                        iconType: "ICON_TYPE_EMPTY",
                      },
                      availability: {
                        nextCloseTime: "2023-09-19 03:00:00",
                        opened: true,
                      },
                      badges: {},
                      isOpen: true,
                      type: "F",
                      badgesV2: {
                        entityBadges: {
                          imageBased: {},
                          textBased: {},
                          textExtendedBadges: {},
                        },
                      },
                      aggregatedDiscountInfoV3: {
                        header: "₹125 OFF",
                        subHeader: "ABOVE ₹249",
                        discountTag: "FLAT DEAL",
                      },
                      orderabilityCommunication: {
                        title: {},
                        subTitle: {},
                        message: {},
                        customIcon: {},
                      },
                      differentiatedUi: {
                        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        differentiatedUiMediaDetails: {
                          mediaType: "ADS_MEDIA_ENUM_IMAGE",
                          lottie: {},
                          video: {},
                        },
                      },
                      reviewsSummary: {},
                      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      restaurantOfferPresentationInfo: {},
                    },
                    analytics: {
                      context: "seo-data-8f46cf41-7a52-41db-841b-ac92648985b3",
                    },
                    cta: {
                      link: "https://www.swiggy.com/restaurants/go-pappe-sector-6-rohini-delhi-175782",
                      text: "RESTAURANT_MENU",
                      type: "WEBLINK",
                    },
                    widgetId:
                      "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
                  },
                  {
                    info: {
                      id: "555831",
                      name: "Only At 129",
                      cloudinaryImageId: "a6c5d1936ff122a825c43524225adc9f",
                      locality: "CSC Market",
                      areaName: "Paschim Vihar",
                      costForTwo: "₹400 for two",
                      cuisines: ["Chaat", "Chinese", "North Indian", "Snacks"],
                      avgRating: 3.3,
                      feeDetails: {
                        restaurantId: "555831",
                        fees: [
                          {
                            name: "BASE_TIME",
                          },
                          {
                            name: "BASE_DISTANCE",
                            fee: 6600,
                          },
                          {
                            name: "ANCILLARY_SURGE_FEE",
                          },
                        ],
                        totalFee: 6600,
                      },
                      parentId: "334442",
                      avgRatingString: "3.3",
                      totalRatingsString: "1K+",
                      sla: {
                        deliveryTime: 21,
                        lastMileTravel: 5,
                        serviceability: "SERVICEABLE",
                        slaString: "21 mins",
                        lastMileTravelString: "5.0 km",
                        iconType: "ICON_TYPE_EMPTY",
                      },
                      availability: {
                        nextCloseTime: "2023-09-19 04:00:00",
                        opened: true,
                      },
                      badges: {},
                      isOpen: true,
                      type: "F",
                      badgesV2: {
                        entityBadges: {
                          imageBased: {},
                          textBased: {},
                          textExtendedBadges: {},
                        },
                      },
                      aggregatedDiscountInfoV3: {
                        header: "60% OFF",
                        subHeader: "UPTO ₹120",
                      },
                      orderabilityCommunication: {
                        title: {},
                        subTitle: {},
                        message: {},
                        customIcon: {},
                      },
                      differentiatedUi: {
                        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        differentiatedUiMediaDetails: {
                          mediaType: "ADS_MEDIA_ENUM_IMAGE",
                          lottie: {},
                          video: {},
                        },
                      },
                      reviewsSummary: {},
                      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      restaurantOfferPresentationInfo: {},
                    },
                    analytics: {
                      context: "seo-data-8f46cf41-7a52-41db-841b-ac92648985b3",
                    },
                    cta: {
                      link: "https://www.swiggy.com/restaurants/only-at-129-csc-market-paschim-vihar-delhi-555831",
                      text: "RESTAURANT_MENU",
                      type: "WEBLINK",
                    },
                    widgetId:
                      "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
                  },
                  {
                    info: {
                      id: "252104",
                      name: "Sardar Ji Late Night Kitchen (Rajouri Garden)",
                      cloudinaryImageId: "j0kv8rp155o0s426id71",
                      locality: "C Block",
                      areaName: "Tagore Garden",
                      costForTwo: "₹300 for two",
                      cuisines: [
                        "North Indian",
                        "Punjabi",
                        "Tandoor",
                        "Chinese",
                        "Indian",
                        "Kebabs",
                        "Beverages",
                        "Biryani",
                      ],
                      avgRating: 4.2,
                      feeDetails: {
                        restaurantId: "252104",
                        fees: [
                          {
                            name: "BASE_TIME",
                          },
                          {
                            name: "BASE_DISTANCE",
                            fee: 10100,
                          },
                          {
                            name: "ANCILLARY_SURGE_FEE",
                          },
                        ],
                        totalFee: 10100,
                      },
                      parentId: "178225",
                      avgRatingString: "4.2",
                      totalRatingsString: "1K+",
                      sla: {
                        deliveryTime: 34,
                        lastMileTravel: 8.9,
                        serviceability: "SERVICEABLE",
                        slaString: "34 mins",
                        lastMileTravelString: "8.9 km",
                        iconType: "ICON_TYPE_EMPTY",
                      },
                      availability: {
                        nextCloseTime: "2023-09-19 04:00:00",
                        opened: true,
                      },
                      badges: {},
                      isOpen: true,
                      aggregatedDiscountInfoV2: {},
                      type: "F",
                      badgesV2: {
                        entityBadges: {
                          imageBased: {},
                          textBased: {},
                          textExtendedBadges: {},
                        },
                      },
                      orderabilityCommunication: {
                        title: {},
                        subTitle: {},
                        message: {},
                        customIcon: {},
                      },
                      differentiatedUi: {
                        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        differentiatedUiMediaDetails: {
                          mediaType: "ADS_MEDIA_ENUM_IMAGE",
                          lottie: {},
                          video: {},
                        },
                      },
                      reviewsSummary: {},
                      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      restaurantOfferPresentationInfo: {},
                    },
                    analytics: {
                      context: "seo-data-8f46cf41-7a52-41db-841b-ac92648985b3",
                    },
                    cta: {
                      link: "https://www.swiggy.com/restaurants/sardar-ji-late-night-kitchen-rajouri-garden-c-block-tagore-garden-delhi-252104",
                      text: "RESTAURANT_MENU",
                      type: "WEBLINK",
                    },
                    widgetId:
                      "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
                  },
                  {
                    info: {
                      id: "6075",
                      name: "London Grill Co",
                      cloudinaryImageId: "xqcmflozlgx4ulmnsibv",
                      locality: "Rohtak Road",
                      areaName: "Paschim Vihar",
                      costForTwo: "₹500 for two",
                      cuisines: [
                        "American",
                        "Healthy Food",
                        "Continental",
                        "Salads",
                        "Beverages",
                        "Desserts",
                      ],
                      avgRating: 4,
                      feeDetails: {
                        restaurantId: "6075",
                        fees: [
                          {
                            name: "BASE_TIME",
                          },
                          {
                            name: "BASE_DISTANCE",
                            fee: 6600,
                          },
                          {
                            name: "ANCILLARY_SURGE_FEE",
                          },
                        ],
                        totalFee: 6600,
                      },
                      parentId: "602",
                      avgRatingString: "4.0",
                      totalRatingsString: "10K+",
                      sla: {
                        deliveryTime: 25,
                        lastMileTravel: 5,
                        serviceability: "SERVICEABLE",
                        slaString: "25 mins",
                        lastMileTravelString: "5.0 km",
                        iconType: "ICON_TYPE_EMPTY",
                      },
                      availability: {
                        nextCloseTime: "2023-09-19 05:00:00",
                        opened: true,
                      },
                      badges: {
                        textExtendedBadges: [
                          {
                            iconId: "guiltfree/GF_Logo_android_3x",
                            shortDescription: "options available",
                            fontColor: "#7E808C",
                          },
                        ],
                      },
                      isOpen: true,
                      type: "F",
                      badgesV2: {
                        entityBadges: {
                          imageBased: {},
                          textBased: {},
                          textExtendedBadges: {
                            badgeObject: [
                              {
                                attributes: {
                                  description: "",
                                  fontColor: "#7E808C",
                                  iconId: "guiltfree/GF_Logo_android_3x",
                                  shortDescription: "options available",
                                },
                              },
                            ],
                          },
                        },
                      },
                      aggregatedDiscountInfoV3: {
                        header: "50% OFF",
                        subHeader: "UPTO ₹100",
                      },
                      orderabilityCommunication: {
                        title: {},
                        subTitle: {},
                        message: {},
                        customIcon: {},
                      },
                      differentiatedUi: {
                        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        differentiatedUiMediaDetails: {
                          mediaType: "ADS_MEDIA_ENUM_IMAGE",
                          lottie: {},
                          video: {},
                        },
                      },
                      reviewsSummary: {},
                      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      restaurantOfferPresentationInfo: {},
                    },
                    analytics: {
                      context: "seo-data-8f46cf41-7a52-41db-841b-ac92648985b3",
                    },
                    cta: {
                      link: "https://www.swiggy.com/restaurants/london-grill-co-rohtak-road-paschim-vihar-delhi-6075",
                      text: "RESTAURANT_MENU",
                      type: "WEBLINK",
                    },
                    widgetId:
                      "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
                  },
                  {
                    info: {
                      id: "504341",
                      name: "Sardar Ji Late Night Kitchen (Paschim Vihar)",
                      cloudinaryImageId: "xax24mb5ktl439uewghm",
                      locality: "A Block",
                      areaName: "Paschim Vihar",
                      costForTwo: "₹300 for two",
                      cuisines: [
                        "North Indian",
                        "Punjabi",
                        "Chinese",
                        "Biryani",
                        "Beverages",
                        "Tandoor",
                        "Indian",
                      ],
                      avgRating: 4.3,
                      feeDetails: {
                        restaurantId: "504341",
                        fees: [
                          {
                            name: "BASE_TIME",
                          },
                          {
                            name: "BASE_DISTANCE",
                            fee: 6600,
                          },
                          {
                            name: "ANCILLARY_SURGE_FEE",
                          },
                        ],
                        totalFee: 6600,
                      },
                      parentId: "13225",
                      avgRatingString: "4.3",
                      totalRatingsString: "500+",
                      sla: {
                        deliveryTime: 27,
                        lastMileTravel: 5,
                        serviceability: "SERVICEABLE",
                        slaString: "27 mins",
                        lastMileTravelString: "5.0 km",
                        iconType: "ICON_TYPE_EMPTY",
                      },
                      availability: {
                        nextCloseTime: "2023-09-19 04:00:00",
                        opened: true,
                      },
                      badges: {},
                      isOpen: true,
                      type: "F",
                      badgesV2: {
                        entityBadges: {
                          imageBased: {},
                          textBased: {},
                          textExtendedBadges: {},
                        },
                      },
                      aggregatedDiscountInfoV3: {
                        header: "10% OFF",
                        subHeader: "UPTO ₹40",
                      },
                      orderabilityCommunication: {
                        title: {},
                        subTitle: {},
                        message: {},
                        customIcon: {},
                      },
                      differentiatedUi: {
                        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        differentiatedUiMediaDetails: {
                          mediaType: "ADS_MEDIA_ENUM_IMAGE",
                          lottie: {},
                          video: {},
                        },
                      },
                      reviewsSummary: {},
                      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      restaurantOfferPresentationInfo: {},
                    },
                    analytics: {
                      context: "seo-data-8f46cf41-7a52-41db-841b-ac92648985b3",
                    },
                    cta: {
                      link: "https://www.swiggy.com/restaurants/sardar-ji-late-night-kitchen-paschim-vihar-a-block-paschim-vihar-delhi-504341",
                      text: "RESTAURANT_MENU",
                      type: "WEBLINK",
                    },
                    widgetId:
                      "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
                  },
                  {
                    info: {
                      id: "34074",
                      name: "Kapoor Dhaba",
                      cloudinaryImageId: "xn5qifxjfrfi1b3rhv1s",
                      locality: "Peeragarhi Camp",
                      areaName: "Punjabi Bagh",
                      costForTwo: "₹200 for two",
                      cuisines: ["North Indian"],
                      avgRating: 4.1,
                      veg: true,
                      feeDetails: {
                        restaurantId: "34074",
                        fees: [
                          {
                            name: "BASE_TIME",
                          },
                          {
                            name: "BASE_DISTANCE",
                            fee: 6600,
                          },
                          {
                            name: "ANCILLARY_SURGE_FEE",
                          },
                        ],
                        totalFee: 6600,
                      },
                      parentId: "114884",
                      avgRatingString: "4.1",
                      totalRatingsString: "500+",
                      sla: {
                        deliveryTime: 24,
                        lastMileTravel: 5,
                        serviceability: "SERVICEABLE",
                        slaString: "24 mins",
                        lastMileTravelString: "5.0 km",
                        iconType: "ICON_TYPE_EMPTY",
                      },
                      availability: {
                        nextCloseTime: "2023-09-19 04:30:00",
                        opened: true,
                      },
                      badges: {},
                      isOpen: true,
                      type: "F",
                      badgesV2: {
                        entityBadges: {
                          imageBased: {},
                          textBased: {},
                          textExtendedBadges: {},
                        },
                      },
                      aggregatedDiscountInfoV3: {
                        header: "10% OFF",
                        subHeader: "UPTO ₹40",
                      },
                      orderabilityCommunication: {
                        title: {},
                        subTitle: {},
                        message: {},
                        customIcon: {},
                      },
                      differentiatedUi: {
                        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        differentiatedUiMediaDetails: {
                          mediaType: "ADS_MEDIA_ENUM_IMAGE",
                          lottie: {},
                          video: {},
                        },
                      },
                      reviewsSummary: {},
                      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      restaurantOfferPresentationInfo: {},
                    },
                    analytics: {
                      context: "seo-data-8f46cf41-7a52-41db-841b-ac92648985b3",
                    },
                    cta: {
                      link: "https://www.swiggy.com/restaurants/kapoor-dhaba-peeragarhi-camp-punjabi-bagh-delhi-34074",
                      text: "RESTAURANT_MENU",
                      type: "WEBLINK",
                    },
                    widgetId:
                      "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
                  },
                ],
                theme: "SeoRestaurantListingGridWidget",
              },
            },
          },
        },
      },
      {
        card: {
          card: {
            "@type": "type.googleapis.com/swiggy.seo.widgets.v1.ShowMoreButton",
            message: "Show More",
            id: "show_more_button",
          },
        },
      },
      {
        card: {
          card: {
            "@type": "type.googleapis.com/swiggy.seo.widgets.v1.BrandsContent",
            title: "Best Places to Eat Across Cities",
            brands: [
              {
                text: "Best Restaurants in Bangalore",
                link: "https://www.swiggy.com/city/bangalore/best-restaurants",
              },
              {
                text: "Best Restaurants in Gurgaon",
                link: "https://www.swiggy.com/city/gurgaon/best-restaurants",
              },
              {
                text: "Best Restaurants in Hyderabad",
                link: "https://www.swiggy.com/city/hyderabad/best-restaurants",
              },
              {
                text: "Best Restaurants in Delhi",
                link: "https://www.swiggy.com/city/delhi/best-restaurants",
              },
              {
                text: "Best Restaurants in Mumbai",
                link: "https://www.swiggy.com/city/mumbai/best-restaurants",
              },
              {
                text: "Best Restaurants in Pune",
                link: "https://www.swiggy.com/city/pune/best-restaurants",
              },
              {
                text: "Best Restaurants in Kolkata",
                link: "https://www.swiggy.com/city/kolkata/best-restaurants",
              },
              {
                text: "Best Restaurants in Chennai",
                link: "https://www.swiggy.com/city/chennai/best-restaurants",
              },
              {
                text: "Best Restaurants in Ahmedabad",
                link: "https://www.swiggy.com/city/ahmedabad/best-restaurants",
              },
              {
                text: "Best Restaurants in Chandigarh",
                link: "https://www.swiggy.com/city/chandigarh/best-restaurants",
              },
              {
                text: "Best Restaurants in Jaipur",
                link: "https://www.swiggy.com/city/jaipur/best-restaurants",
              },
              {
                text: "Best Restaurants in Kochi",
                link: "https://www.swiggy.com/city/kochi/best-restaurants",
              },
              {
                text: "Best Restaurants in Coimbatore",
                link: "https://www.swiggy.com/city/coimbatore/best-restaurants",
              },
              {
                text: "Best Restaurants in Lucknow",
                link: "https://www.swiggy.com/city/lucknow/best-restaurants",
              },
              {
                text: "Best Restaurants in Nagpur",
                link: "https://www.swiggy.com/city/nagpur/best-restaurants",
              },
              {
                text: "Best Restaurants in Vadodara",
                link: "https://www.swiggy.com/city/vadodara/best-restaurants",
              },
              {
                text: "Best Restaurants in Indore",
                link: "https://www.swiggy.com/city/indore/best-restaurants",
              },
              {
                text: "Best Restaurants in Guwahati",
                link: "https://www.swiggy.com/city/guwahati/best-restaurants",
              },
              {
                text: "Best Restaurants in Vizag",
                link: "https://www.swiggy.com/city/vizag/best-restaurants",
              },
              {
                text: "Best Restaurants in Surat",
                link: "https://www.swiggy.com/city/surat/best-restaurants",
              },
              {
                text: "Best Restaurants in Dehradun",
                link: "https://www.swiggy.com/city/dehradun/best-restaurants",
              },
              {
                text: "Best Restaurants in Noida",
                link: "https://www.swiggy.com/city/noida/best-restaurants",
              },
              {
                text: "Best Restaurants in Ludhiana",
                link: "https://www.swiggy.com/city/ludhiana/best-restaurants",
              },
              {
                text: "Best Restaurants in Trichy",
                link: "https://www.swiggy.com/city/trichy/best-restaurants",
              },
              {
                text: "Best Restaurants in Vijayawada",
                link: "https://www.swiggy.com/city/vijayawada/best-restaurants",
              },
              {
                text: "Best Restaurants in Kanpur",
                link: "https://www.swiggy.com/city/kanpur/best-restaurants",
              },
              {
                text: "Best Restaurants in Mysore",
                link: "https://www.swiggy.com/city/mysore/best-restaurants",
              },
              {
                text: "Best Restaurants in Nashik",
                link: "https://www.swiggy.com/city/nashik/best-restaurants",
              },
              {
                text: "Best Restaurants in Pondicherry",
                link: "https://www.swiggy.com/city/pondicherry/best-restaurants",
              },
              {
                text: "Best Restaurants in Agra",
                link: "https://www.swiggy.com/city/agra/best-restaurants",
              },
              {
                text: "Best Restaurants in Aurangabad",
                link: "https://www.swiggy.com/city/aurangabad/best-restaurants",
              },
              {
                text: "Best Restaurants in Jalandhar",
                link: "https://www.swiggy.com/city/jalandhar/best-restaurants",
              },
              {
                text: "Best Restaurants in Kota",
                link: "https://www.swiggy.com/city/kota/best-restaurants",
              },
              {
                text: "Best Restaurants in Madurai",
                link: "https://www.swiggy.com/city/madurai/best-restaurants",
              },
              {
                text: "Best Restaurants in Allahabad",
                link: "https://www.swiggy.com/city/allahabad/best-restaurants",
              },
              {
                text: "Best Restaurants in Manipal",
                link: "https://www.swiggy.com/city/manipal/best-restaurants",
              },
              {
                text: "Best Restaurants in Amritsar",
                link: "https://www.swiggy.com/city/amritsar/best-restaurants",
              },
              {
                text: "Best Restaurants in Bareilly",
                link: "https://www.swiggy.com/city/bareilly/best-restaurants",
              },
              {
                text: "Best Restaurants in Meerut",
                link: "https://www.swiggy.com/city/meerut/best-restaurants",
              },
              {
                text: "Best Restaurants in Bhopal",
                link: "https://www.swiggy.com/city/bhopal/best-restaurants",
              },
              {
                text: "Best Restaurants in Ooty",
                link: "https://www.swiggy.com/city/ooty/best-restaurants",
              },
              {
                text: "Best Restaurants in Bhubaneswar",
                link: "https://www.swiggy.com/city/bhubaneswar/best-restaurants",
              },
              {
                text: "Best Restaurants in Raipur",
                link: "https://www.swiggy.com/city/raipur/best-restaurants",
              },
              {
                text: "Best Restaurants in Bikaner",
                link: "https://www.swiggy.com/city/bikaner/best-restaurants",
              },
              {
                text: "Best Restaurants in Rajkot",
                link: "https://www.swiggy.com/city/rajkot/best-restaurants",
              },
              {
                text: "Best Restaurants in Kozhikode",
                link: "https://www.swiggy.com/city/kozhikode/best-restaurants",
              },
              {
                text: "Best Restaurants in Central Goa",
                link: "https://www.swiggy.com/city/central-goa/best-restaurants",
              },
              {
                text: "Best Restaurants in Sirsa",
                link: "https://www.swiggy.com/city/sirsa/best-restaurants",
              },
              {
                text: "Best Restaurants in Gwalior",
                link: "https://www.swiggy.com/city/gwalior/best-restaurants",
              },
              {
                text: "Best Restaurants in Thrissur",
                link: "https://www.swiggy.com/city/thrissur/best-restaurants",
              },
              {
                text: "Best Restaurants in Kharagpur",
                link: "https://www.swiggy.com/city/kharagpur/best-restaurants",
              },
              {
                text: "Best Restaurants in Tirupati",
                link: "https://www.swiggy.com/city/tirupati/best-restaurants",
              },
              {
                text: "Best Restaurants in Tirupur",
                link: "https://www.swiggy.com/city/tirupur/best-restaurants",
              },
              {
                text: "Best Restaurants in Vellore",
                link: "https://www.swiggy.com/city/vellore/best-restaurants",
              },
              {
                text: "Best Restaurants in Thiruvananthapuram",
                link: "https://www.swiggy.com/city/thiruvananthapuram/best-restaurants",
              },
              {
                text: "Best Restaurants in Warangal",
                link: "https://www.swiggy.com/city/warangal/best-restaurants",
              },
              {
                text: "Best Restaurants in Varanasi",
                link: "https://www.swiggy.com/city/varanasi/best-restaurants",
              },
              {
                text: "Best Restaurants in Mangaluru",
                link: "https://www.swiggy.com/city/mangaluru/best-restaurants",
              },
              {
                text: "Best Restaurants in Patna",
                link: "https://www.swiggy.com/city/patna/best-restaurants",
              },
              {
                text: "Best Restaurants in Ranchi",
                link: "https://www.swiggy.com/city/ranchi/best-restaurants",
              },
              {
                text: "Best Restaurants in Faridabad",
                link: "https://www.swiggy.com/city/faridabad/best-restaurants",
              },
              {
                text: "Best Restaurants in Guntur",
                link: "https://www.swiggy.com/city/guntur/best-restaurants",
              },
              {
                text: "Best Restaurants in Ujjain",
                link: "https://www.swiggy.com/city/ujjain/best-restaurants",
              },
              {
                text: "Best Restaurants in Patiala",
                link: "https://www.swiggy.com/city/patiala/best-restaurants",
              },
              {
                text: "Best Restaurants in Karnal",
                link: "https://www.swiggy.com/city/karnal/best-restaurants",
              },
              {
                text: "Best Restaurants in Kakinada",
                link: "https://www.swiggy.com/city/kakinada/best-restaurants",
              },
              {
                text: "Best Restaurants in Rajahmundry",
                link: "https://www.swiggy.com/city/rajahmundry/best-restaurants",
              },
              {
                text: "Best Restaurants in Bilaspur",
                link: "https://www.swiggy.com/city/bilaspur/best-restaurants",
              },
              {
                text: "Best Restaurants in Bhilai",
                link: "https://www.swiggy.com/city/bhilai/best-restaurants",
              },
              {
                text: "Best Restaurants in Anand",
                link: "https://www.swiggy.com/city/anand/best-restaurants",
              },
              {
                text: "Best Restaurants in Bhavnagar",
                link: "https://www.swiggy.com/city/bhavnagar/best-restaurants",
              },
              {
                text: "Best Restaurants in Jammu",
                link: "https://www.swiggy.com/city/jammu/best-restaurants",
              },
              {
                text: "Best Restaurants in Muktsar",
                link: "https://www.swiggy.com/city/muktsar/best-restaurants",
              },
              {
                text: "Best Restaurants in Panipat",
                link: "https://www.swiggy.com/city/panipat/best-restaurants",
              },
              {
                text: "Best Restaurants in Dhanbad",
                link: "https://www.swiggy.com/city/dhanbad/best-restaurants",
              },
              {
                text: "Best Restaurants in Hubli",
                link: "https://www.swiggy.com/city/hubli/best-restaurants",
              },
              {
                text: "Best Restaurants in Belgaum",
                link: "https://www.swiggy.com/city/belgaum/best-restaurants",
              },
              {
                text: "Best Restaurants in Jabalpur",
                link: "https://www.swiggy.com/city/jabalpur/best-restaurants",
              },
              {
                text: "Best Restaurants in Kolhapur",
                link: "https://www.swiggy.com/city/kolhapur/best-restaurants",
              },
              {
                text: "Best Restaurants in Solapur",
                link: "https://www.swiggy.com/city/solapur/best-restaurants",
              },
              {
                text: "Best Restaurants in Shillong",
                link: "https://www.swiggy.com/city/shillong/best-restaurants",
              },
              {
                text: "Best Restaurants in Cuttack",
                link: "https://www.swiggy.com/city/cuttack/best-restaurants",
              },
              {
                text: "Best Restaurants in Aligarh",
                link: "https://www.swiggy.com/city/aligarh/best-restaurants",
              },
              {
                text: "Best Restaurants in Salem",
                link: "https://www.swiggy.com/city/salem/best-restaurants",
              },
              {
                text: "Best Restaurants in Jodhpur",
                link: "https://www.swiggy.com/city/jodhpur/best-restaurants",
              },
              {
                text: "Best Restaurants in Ajmer",
                link: "https://www.swiggy.com/city/ajmer/best-restaurants",
              },
              {
                text: "Best Restaurants in Jhansi",
                link: "https://www.swiggy.com/city/jhansi/best-restaurants",
              },
              {
                text: "Best Restaurants in Gorakhpur",
                link: "https://www.swiggy.com/city/gorakhpur/best-restaurants",
              },
              {
                text: "Best Restaurants in Thanjavur",
                link: "https://www.swiggy.com/city/thanjavur/best-restaurants",
              },
              {
                text: "Best Restaurants in Erode",
                link: "https://www.swiggy.com/city/erode/best-restaurants",
              },
              {
                text: "Best Restaurants in Nellore",
                link: "https://www.swiggy.com/city/nellore/best-restaurants",
              },
              {
                text: "Best Restaurants in Rourkela",
                link: "https://www.swiggy.com/city/rourkela/best-restaurants",
              },
              {
                text: "Best Restaurants in Anantapur",
                link: "https://www.swiggy.com/city/anantapur/best-restaurants",
              },
              {
                text: "Best Restaurants in Kurnool",
                link: "https://www.swiggy.com/city/kurnool/best-restaurants",
              },
              {
                text: "Best Restaurants in Ahmednagar",
                link: "https://www.swiggy.com/city/ahmednagar/best-restaurants",
              },
              {
                text: "Best Restaurants in Phagwara",
                link: "https://www.swiggy.com/city/phagwara/best-restaurants",
              },
              {
                text: "Best Restaurants in Ambala",
                link: "https://www.swiggy.com/city/ambala/best-restaurants",
              },
              {
                text: "Best Restaurants in Ballari",
                link: "https://www.swiggy.com/city/ballari/best-restaurants",
              },
              {
                text: "Best Restaurants in Saharanpur",
                link: "https://www.swiggy.com/city/saharanpur/best-restaurants",
              },
              {
                text: "Best Restaurants in Tirunelveli",
                link: "https://www.swiggy.com/city/tirunelveli/best-restaurants",
              },
              {
                text: "Best Restaurants in Bathinda",
                link: "https://www.swiggy.com/city/bathinda/best-restaurants",
              },
              {
                text: "Best Restaurants in Mathura",
                link: "https://www.swiggy.com/city/mathura/best-restaurants",
              },
              {
                text: "Best Restaurants in Haridwar",
                link: "https://www.swiggy.com/city/haridwar/best-restaurants",
              },
              {
                text: "Best Restaurants in Ratnagiri",
                link: "https://www.swiggy.com/city/ratnagiri/best-restaurants",
              },
              {
                text: "Best Restaurants in Sangli",
                link: "https://www.swiggy.com/city/sangli/best-restaurants",
              },
              {
                text: "Best Restaurants in Amravati",
                link: "https://www.swiggy.com/city/amravati/best-restaurants",
              },
              {
                text: "Best Restaurants in Rishikesh",
                link: "https://www.swiggy.com/city/rishikesh/best-restaurants",
              },
              {
                text: "Best Restaurants in Nagercoil",
                link: "https://www.swiggy.com/city/nagercoil/best-restaurants",
              },
              {
                text: "Best Restaurants in KanyaKumari",
                link: "https://www.swiggy.com/city/kanyakumari/best-restaurants",
              },
              {
                text: "Best Restaurants in Kadapa",
                link: "https://www.swiggy.com/city/kadapa/best-restaurants",
              },
              {
                text: "Best Restaurants in Nizamabad",
                link: "https://www.swiggy.com/city/nizamabad/best-restaurants",
              },
              {
                text: "Best Restaurants in Shivamogga",
                link: "https://www.swiggy.com/city/shivamogga/best-restaurants",
              },
              {
                text: "Best Restaurants in Davanagere",
                link: "https://www.swiggy.com/city/davanagere/best-restaurants",
              },
              {
                text: "Best Restaurants in Roorkee",
                link: "https://www.swiggy.com/city/roorkee/best-restaurants",
              },
              {
                text: "Best Restaurants in Nanded",
                link: "https://www.swiggy.com/city/nanded/best-restaurants",
              },
              {
                text: "Best Restaurants in Rewa",
                link: "https://www.swiggy.com/city/rewa/best-restaurants",
              },
              {
                text: "Best Restaurants in Satna",
                link: "https://www.swiggy.com/city/satna/best-restaurants",
              },
              {
                text: "Best Restaurants in Muzaffarpur",
                link: "https://www.swiggy.com/city/muzaffarpur/best-restaurants",
              },
              {
                text: "Best Restaurants in Valsad",
                link: "https://www.swiggy.com/city/valsad/best-restaurants",
              },
              {
                text: "Best Restaurants in Vapi",
                link: "https://www.swiggy.com/city/vapi/best-restaurants",
              },
              {
                text: "Best Restaurants in Chhapra",
                link: "https://www.swiggy.com/city/chhapra/best-restaurants",
              },
              {
                text: "Best Restaurants in Dharamshala",
                link: "https://www.swiggy.com/city/dharamshala/best-restaurants",
              },
              {
                text: "Best Restaurants in Kollam",
                link: "https://www.swiggy.com/city/kollam/best-restaurants",
              },
              {
                text: "Best Restaurants in Silchar",
                link: "https://www.swiggy.com/city/silchar/best-restaurants",
              },
              {
                text: "Best Restaurants in Alappuzha",
                link: "https://www.swiggy.com/city/alappuzha/best-restaurants",
              },
              {
                text: "Best Restaurants in Sonipat",
                link: "https://www.swiggy.com/city/sonipat/best-restaurants",
              },
              {
                text: "Best Restaurants in Rohtak",
                link: "https://www.swiggy.com/city/rohtak/best-restaurants",
              },
              {
                text: "Best Restaurants in Mehsana",
                link: "https://www.swiggy.com/city/mehsana/best-restaurants",
              },
              {
                text: "Best Restaurants in Kullu",
                link: "https://www.swiggy.com/city/kullu/best-restaurants",
              },
              {
                text: "Best Restaurants in Dhule",
                link: "https://www.swiggy.com/city/dhule/best-restaurants",
              },
              {
                text: "Best Restaurants in Dharwad",
                link: "https://www.swiggy.com/city/dharwad/best-restaurants",
              },
              {
                text: "Best Restaurants in Latur",
                link: "https://www.swiggy.com/city/latur/best-restaurants",
              },
              {
                text: "Best Restaurants in Vizianagaram",
                link: "https://www.swiggy.com/city/vizianagaram/best-restaurants",
              },
              {
                text: "Best Restaurants in Khammam",
                link: "https://www.swiggy.com/city/khammam/best-restaurants",
              },
              {
                text: "Best Restaurants in Hampi",
                link: "https://www.swiggy.com/city/hampi/best-restaurants",
              },
              {
                text: "Best Restaurants in Nainital",
                link: "https://www.swiggy.com/city/nainital/best-restaurants",
              },
              {
                text: "Best Restaurants in Akola",
                link: "https://www.swiggy.com/city/akola/best-restaurants",
              },
              {
                text: "Best Restaurants in Kalaburagi",
                link: "https://www.swiggy.com/city/kalaburagi/best-restaurants",
              },
              {
                text: "Best Restaurants in Gaya",
                link: "https://www.swiggy.com/city/gaya/best-restaurants",
              },
              {
                text: "Best Restaurants in Muzaffarnagar",
                link: "https://www.swiggy.com/city/muzaffarnagar/best-restaurants",
              },
              {
                text: "Best Restaurants in Dewas",
                link: "https://www.swiggy.com/city/dewas/best-restaurants",
              },
              {
                text: "Best Restaurants in Korba",
                link: "https://www.swiggy.com/city/korba/best-restaurants",
              },
              {
                text: "Best Restaurants in Mussoorie",
                link: "https://www.swiggy.com/city/mussoorie/best-restaurants",
              },
              {
                text: "Best Restaurants in Jalgaon",
                link: "https://www.swiggy.com/city/jalgaon/best-restaurants",
              },
              {
                text: "Best Restaurants in Yamuna Nagar",
                link: "https://www.swiggy.com/city/yamuna-nagar/best-restaurants",
              },
              {
                text: "Best Restaurants in Bhagalpur",
                link: "https://www.swiggy.com/city/bhagalpur/best-restaurants",
              },
              {
                text: "Best Restaurants in Hapur",
                link: "https://www.swiggy.com/city/hapur/best-restaurants",
              },
              {
                text: "Best Restaurants in Morena",
                link: "https://www.swiggy.com/city/morena/best-restaurants",
              },
              {
                text: "Best Restaurants in Hassan",
                link: "https://www.swiggy.com/city/hassan/best-restaurants",
              },
              {
                text: "Best Restaurants in Hisar",
                link: "https://www.swiggy.com/city/hisar/best-restaurants",
              },
              {
                text: "Best Restaurants in Godhra",
                link: "https://www.swiggy.com/city/godhra/best-restaurants",
              },
              {
                text: "Best Restaurants in Kolar ",
                link: "https://www.swiggy.com/city/kolar/best-restaurants",
              },
              {
                text: "Best Restaurants in Rampur",
                link: "https://www.swiggy.com/city/rampur/best-restaurants",
              },
              {
                text: "Best Restaurants in Sitapur",
                link: "https://www.swiggy.com/city/sitapur/best-restaurants",
              },
              {
                text: "Best Restaurants in Etawah",
                link: "https://www.swiggy.com/city/etawah/best-restaurants",
              },
              {
                text: "Best Restaurants in Porbandar",
                link: "https://www.swiggy.com/city/porbandar/best-restaurants",
              },
              {
                text: "Best Restaurants in Nadiad",
                link: "https://www.swiggy.com/city/nadiad/best-restaurants",
              },
              {
                text: "Best Restaurants in Sagar",
                link: "https://www.swiggy.com/city/sagar/best-restaurants",
              },
              {
                text: "Best Restaurants in Morbi",
                link: "https://www.swiggy.com/city/morbi/best-restaurants",
              },
              {
                text: "Best Restaurants in Chhindwara",
                link: "https://www.swiggy.com/city/chhindwara/best-restaurants",
              },
              {
                text: "Best Restaurants in Tumakuru",
                link: "https://www.swiggy.com/city/tumakuru/best-restaurants",
              },
              {
                text: "Best Restaurants in Singrauli",
                link: "https://www.swiggy.com/city/singrauli/best-restaurants",
              },
              {
                text: "Best Restaurants in Thoothukudi",
                link: "https://www.swiggy.com/city/thoothukudi/best-restaurants",
              },
              {
                text: "Best Restaurants in Katni",
                link: "https://www.swiggy.com/city/katni/best-restaurants",
              },
              {
                text: "Best Restaurants in Khandwa",
                link: "https://www.swiggy.com/city/khandwa/best-restaurants",
              },
              {
                text: "Best Restaurants in Eluru",
                link: "https://www.swiggy.com/city/eluru/best-restaurants",
              },
              {
                text: "Best Restaurants in Malappuram",
                link: "https://www.swiggy.com/city/malappuram/best-restaurants",
              },
              {
                text: "Best Restaurants in Dibrugarh",
                link: "https://www.swiggy.com/city/dibrugarh/best-restaurants",
              },
              {
                text: "Best Restaurants in Deoghar",
                link: "https://www.swiggy.com/city/deoghar/best-restaurants",
              },
              {
                text: "Best Restaurants in Khanna",
                link: "https://www.swiggy.com/city/khanna/best-restaurants",
              },
              {
                text: "Best Restaurants in Bidar",
                link: "https://www.swiggy.com/city/bidar/best-restaurants",
              },
              {
                text: "Best Restaurants in Madikeri",
                link: "https://www.swiggy.com/city/madikeri/best-restaurants",
              },
              {
                text: "Best Restaurants in Haldwani",
                link: "https://www.swiggy.com/city/haldwani/best-restaurants",
              },
              {
                text: "Best Restaurants in Farrukhabad",
                link: "https://www.swiggy.com/city/farrukhabad/best-restaurants",
              },
              {
                text: "Best Restaurants in Malegaon",
                link: "https://www.swiggy.com/city/malegaon/best-restaurants",
              },
              {
                text: "Best Restaurants in Dindigul",
                link: "https://www.swiggy.com/city/dindigul/best-restaurants",
              },
              {
                text: "Best Restaurants in Shahjahanpur",
                link: "https://www.swiggy.com/city/shahjahanpur/best-restaurants",
              },
              {
                text: "Best Restaurants in Beed",
                link: "https://www.swiggy.com/city/beed/best-restaurants",
              },
              {
                text: "Best Restaurants in Junagadh",
                link: "https://www.swiggy.com/city/junagadh/best-restaurants",
              },
              {
                text: "Best Restaurants in Asansol",
                link: "https://www.swiggy.com/city/asansol/best-restaurants",
              },
              {
                text: "Best Restaurants in Beawar",
                link: "https://www.swiggy.com/city/beawar/best-restaurants",
              },
              {
                text: "Best Restaurants in Kishangarh",
                link: "https://www.swiggy.com/city/kishangarh/best-restaurants",
              },
              {
                text: "Best Restaurants in Parbhani",
                link: "https://www.swiggy.com/city/parbhani/best-restaurants",
              },
              {
                text: "Best Restaurants in Gondia",
                link: "https://www.swiggy.com/city/gondia/best-restaurants",
              },
              {
                text: "Best Restaurants in Ichalkaranji",
                link: "https://www.swiggy.com/city/ichalkaranji/best-restaurants",
              },
              {
                text: "Best Restaurants in Jalna",
                link: "https://www.swiggy.com/city/jalna/best-restaurants",
              },
              {
                text: "Best Restaurants in Yavatmal",
                link: "https://www.swiggy.com/city/yavatmal/best-restaurants",
              },
              {
                text: "Best Restaurants in Shivpuri",
                link: "https://www.swiggy.com/city/shivpuri/best-restaurants",
              },
              {
                text: "Best Restaurants in Moga",
                link: "https://www.swiggy.com/city/moga/best-restaurants",
              },
              {
                text: "Best Restaurants in Abohar",
                link: "https://www.swiggy.com/city/abohar/best-restaurants",
              },
              {
                text: "Best Restaurants in Adoni",
                link: "https://www.swiggy.com/city/adoni/best-restaurants",
              },
              {
                text: "Best Restaurants in Madanapalle",
                link: "https://www.swiggy.com/city/madanapalle/best-restaurants",
              },
              {
                text: "Best Restaurants in Tiruvannamalai",
                link: "https://www.swiggy.com/city/tiruvannamalai/best-restaurants",
              },
              {
                text: "Best Restaurants in Satara",
                link: "https://www.swiggy.com/city/satara/best-restaurants",
              },
              {
                text: "Best Restaurants in Ambur",
                link: "https://www.swiggy.com/city/ambur/best-restaurants",
              },
              {
                text: "Best Restaurants in Karimnagar",
                link: "https://www.swiggy.com/city/karimnagar/best-restaurants",
              },
              {
                text: "Best Restaurants in Ratlam",
                link: "https://www.swiggy.com/city/ratlam/best-restaurants",
              },
              {
                text: "Best Restaurants in Moradabad",
                link: "https://www.swiggy.com/city/moradabad/best-restaurants",
              },
              {
                text: "Best Restaurants in Machilipatnam",
                link: "https://www.swiggy.com/city/machilipatnam/best-restaurants",
              },
              {
                text: "Best Restaurants in Ongole",
                link: "https://www.swiggy.com/city/ongole/best-restaurants",
              },
              {
                text: "Best Restaurants in Kottayam",
                link: "https://www.swiggy.com/city/kottayam/best-restaurants",
              },
              {
                text: "Best Restaurants in Darbhanga",
                link: "https://www.swiggy.com/city/darbhanga/best-restaurants",
              },
              {
                text: "Best Restaurants in Kurukshetra",
                link: "https://www.swiggy.com/city/kurukshetra/best-restaurants",
              },
              {
                text: "Best Restaurants in Unnao",
                link: "https://www.swiggy.com/city/unnao/best-restaurants",
              },
              {
                text: "Best Restaurants in Bulandshahr",
                link: "https://www.swiggy.com/city/bulandshahr/best-restaurants",
              },
              {
                text: "Best Restaurants in Durgapur",
                link: "https://www.swiggy.com/city/durgapur/best-restaurants",
              },
              {
                text: "Best Restaurants in Siliguri",
                link: "https://www.swiggy.com/city/siliguri/best-restaurants",
              },
              {
                text: "Best Restaurants in Pali",
                link: "https://www.swiggy.com/city/pali/best-restaurants",
              },
              {
                text: "Best Restaurants in Tadepalligudem",
                link: "https://www.swiggy.com/city/tadepalligudem/best-restaurants",
              },
              {
                text: "Best Restaurants in Ramagundam",
                link: "https://www.swiggy.com/city/ramagundam/best-restaurants",
              },
              {
                text: "Best Restaurants in Mahbubnagar",
                link: "https://www.swiggy.com/city/mahbubnagar/best-restaurants",
              },
              {
                text: "Best Restaurants in Bhiwani",
                link: "https://www.swiggy.com/city/bhiwani/best-restaurants",
              },
              {
                text: "Best Restaurants in Cuddalore",
                link: "https://www.swiggy.com/city/cuddalore/best-restaurants",
              },
              {
                text: "Best Restaurants in Kaithal",
                link: "https://www.swiggy.com/city/kaithal/best-restaurants",
              },
              {
                text: "Best Restaurants in Jagtial",
                link: "https://www.swiggy.com/city/jagtial/best-restaurants",
              },
              {
                text: "Best Restaurants in Palakkad",
                link: "https://www.swiggy.com/city/palakkad/best-restaurants",
              },
              {
                text: "Best Restaurants in Guna",
                link: "https://www.swiggy.com/city/guna/best-restaurants",
              },
              {
                text: "Best Restaurants in Kumbakonam",
                link: "https://www.swiggy.com/city/kumbakonam/best-restaurants",
              },
              {
                text: "Best Restaurants in Maunath Bhanjan",
                link: "https://www.swiggy.com/city/maunath-bhanjan/best-restaurants",
              },
              {
                text: "Best Restaurants in Baripada",
                link: "https://www.swiggy.com/city/baripada/best-restaurants",
              },
              {
                text: "Best Restaurants in Orai",
                link: "https://www.swiggy.com/city/orai/best-restaurants",
              },
              {
                text: "Best Restaurants in Bhadrak",
                link: "https://www.swiggy.com/city/bhadrak/best-restaurants",
              },
              {
                text: "Best Restaurants in Batala",
                link: "https://www.swiggy.com/city/batala/best-restaurants",
              },
              {
                text: "Best Restaurants in Firozpur",
                link: "https://www.swiggy.com/city/firozpur/best-restaurants",
              },
              {
                text: "Best Restaurants in Barnala",
                link: "https://www.swiggy.com/city/barnala/best-restaurants",
              },
              {
                text: "Best Restaurants in Raigarh",
                link: "https://www.swiggy.com/city/raigarh/best-restaurants",
              },
              {
                text: "Best Restaurants in Nagaon",
                link: "https://www.swiggy.com/city/nagaon/best-restaurants",
              },
              {
                text: "Best Restaurants in Mainpuri",
                link: "https://www.swiggy.com/city/mainpuri/best-restaurants",
              },
              {
                text: "Best Restaurants in Balurghat",
                link: "https://www.swiggy.com/city/balurghat/best-restaurants",
              },
              {
                text: "Best Restaurants in Giridih",
                link: "https://www.swiggy.com/city/giridih/best-restaurants",
              },
              {
                text: "Best Restaurants in Ghazipur",
                link: "https://www.swiggy.com/city/ghazipur/best-restaurants",
              },
              {
                text: "Best Restaurants in Jagdalpur",
                link: "https://www.swiggy.com/city/jagdalpur/best-restaurants",
              },
              {
                text: "Best Restaurants in Vidisha",
                link: "https://www.swiggy.com/city/vidisha/best-restaurants",
              },
              {
                text: "Best Restaurants in Dimapur",
                link: "https://www.swiggy.com/city/dimapur/best-restaurants",
              },
              {
                text: "Best Restaurants in Shikohabad",
                link: "https://www.swiggy.com/city/shikohabad/best-restaurants",
              },
              {
                text: "Best Restaurants in Imphal",
                link: "https://www.swiggy.com/city/imphal/best-restaurants",
              },
              {
                text: "Best Restaurants in Lakhimpur",
                link: "https://www.swiggy.com/city/lakhimpur/best-restaurants",
              },
              {
                text: "Best Restaurants in Rudrapur",
                link: "https://www.swiggy.com/city/rudrapur/best-restaurants",
              },
              {
                text: "Best Restaurants in Ambikapur",
                link: "https://www.swiggy.com/city/ambikapur/best-restaurants",
              },
              {
                text: "Best Restaurants in Rae Bareli",
                link: "https://www.swiggy.com/city/rae-bareli/best-restaurants",
              },
              {
                text: "Best Restaurants in Tinsukia",
                link: "https://www.swiggy.com/city/tinsukia/best-restaurants",
              },
              {
                text: "Best Restaurants in Rajapalayam",
                link: "https://www.swiggy.com/city/rajapalayam/best-restaurants",
              },
              {
                text: "Best Restaurants in Rajnandgaon",
                link: "https://www.swiggy.com/city/rajnandgaon/best-restaurants",
              },
              {
                text: "Best Restaurants in Kashipur",
                link: "https://www.swiggy.com/city/kashipur/best-restaurants",
              },
              {
                text: "Best Restaurants in Ranibennur",
                link: "https://www.swiggy.com/city/ranibennur/best-restaurants",
              },
              {
                text: "Best Restaurants in Burhanpur",
                link: "https://www.swiggy.com/city/burhanpur/best-restaurants",
              },
              {
                text: "Best Restaurants in Bhadravati",
                link: "https://www.swiggy.com/city/bhadravati/best-restaurants",
              },
              {
                text: "Best Restaurants in Chittoor",
                link: "https://www.swiggy.com/city/chittoor/best-restaurants",
              },
              {
                text: "Best Restaurants in Pudukkottai",
                link: "https://www.swiggy.com/city/pudukkottai/best-restaurants",
              },
              {
                text: "Best Restaurants in Hardoi",
                link: "https://www.swiggy.com/city/hardoi/best-restaurants",
              },
              {
                text: "Best Restaurants in Basti",
                link: "https://www.swiggy.com/city/basti/best-restaurants",
              },
              {
                text: "Best Restaurants in Karaikkudi",
                link: "https://www.swiggy.com/city/karaikkudi/best-restaurants",
              },
              {
                text: "Best Restaurants in Lalitpur",
                link: "https://www.swiggy.com/city/lalitpur/best-restaurants",
              },
              {
                text: "Best Restaurants in Hospet",
                link: "https://www.swiggy.com/city/hospet/best-restaurants",
              },
              {
                text: "Best Restaurants in Budaun",
                link: "https://www.swiggy.com/city/budaun/best-restaurants",
              },
              {
                text: "Best Restaurants in Neemuch",
                link: "https://www.swiggy.com/city/neemuch/best-restaurants",
              },
              {
                text: "Best Restaurants in Pilibhit",
                link: "https://www.swiggy.com/city/pilibhit/best-restaurants",
              },
              {
                text: "Best Restaurants in Barshi",
                link: "https://www.swiggy.com/city/barshi/best-restaurants",
              },
              {
                text: "Best Restaurants in Sri Ganganagar",
                link: "https://www.swiggy.com/city/sri-ganganagar/best-restaurants",
              },
              {
                text: "Best Restaurants in Wardha",
                link: "https://www.swiggy.com/city/wardha/best-restaurants",
              },
              {
                text: "Best Restaurants in Sehore",
                link: "https://www.swiggy.com/city/sehore/best-restaurants",
              },
              {
                text: "Best Restaurants in Bhimavaram",
                link: "https://www.swiggy.com/city/bhimavaram/best-restaurants",
              },
              {
                text: "Best Restaurants in Hanumangarh",
                link: "https://www.swiggy.com/city/hanumangarh/best-restaurants",
              },
              {
                text: "Best Restaurants in Pathankot",
                link: "https://www.swiggy.com/city/pathankot/best-restaurants",
              },
              {
                text: "Best Restaurants in Puri",
                link: "https://www.swiggy.com/city/puri/best-restaurants",
              },
              {
                text: "Best Restaurants in Fatehpur",
                link: "https://www.swiggy.com/city/fatehpur/best-restaurants",
              },
              {
                text: "Best Restaurants in Surendranagar Dudhrej",
                link: "https://www.swiggy.com/city/surendranagar-dudhrej/best-restaurants",
              },
              {
                text: "Best Restaurants in Jamnagar",
                link: "https://www.swiggy.com/city/jamnagar/best-restaurants",
              },
              {
                text: "Best Restaurants in Bhuj",
                link: "https://www.swiggy.com/city/bhuj/best-restaurants",
              },
              {
                text: "Best Restaurants in Gandhidham",
                link: "https://www.swiggy.com/city/gandhidham/best-restaurants",
              },
              {
                text: "Best Restaurants in Bharuch",
                link: "https://www.swiggy.com/city/bharuch/best-restaurants",
              },
              {
                text: "Best Restaurants in Navsari",
                link: "https://www.swiggy.com/city/navsari/best-restaurants",
              },
              {
                text: "Best Restaurants in Amreli",
                link: "https://www.swiggy.com/city/amreli/best-restaurants",
              },
              {
                text: "Best Restaurants in Palanpur",
                link: "https://www.swiggy.com/city/palanpur/best-restaurants",
              },
              {
                text: "Best Restaurants in Bhilwara",
                link: "https://www.swiggy.com/city/bhilwara/best-restaurants",
              },
              {
                text: "Best Restaurants in Suratgarh",
                link: "https://www.swiggy.com/city/suratgarh/best-restaurants",
              },
              {
                text: "Best Restaurants in Sikar",
                link: "https://www.swiggy.com/city/sikar/best-restaurants",
              },
              {
                text: "Best Restaurants in Churu",
                link: "https://www.swiggy.com/city/churu/best-restaurants",
              },
              {
                text: "Best Restaurants in Alwar",
                link: "https://www.swiggy.com/city/alwar/best-restaurants",
              },
              {
                text: "Best Restaurants in Bhiwadi",
                link: "https://www.swiggy.com/city/bhiwadi/best-restaurants",
              },
              {
                text: "Best Restaurants in Bharatpur",
                link: "https://www.swiggy.com/city/bharatpur/best-restaurants",
              },
              {
                text: "Best Restaurants in Mount Abu",
                link: "https://www.swiggy.com/city/mount-abu/best-restaurants",
              },
              {
                text: "Best Restaurants in Bundi",
                link: "https://www.swiggy.com/city/bundi/best-restaurants",
              },
              {
                text: "Best Restaurants in Sawai Madhopur",
                link: "https://www.swiggy.com/city/sawai-madhopur/best-restaurants",
              },
              {
                text: "Best Restaurants in Purulia",
                link: "https://www.swiggy.com/city/purulia/best-restaurants",
              },
              {
                text: "Best Restaurants in Bardhaman",
                link: "https://www.swiggy.com/city/bardhaman/best-restaurants",
              },
              {
                text: "Best Restaurants in Raniganj",
                link: "https://www.swiggy.com/city/raniganj/best-restaurants",
              },
              {
                text: "Best Restaurants in Darjeeling",
                link: "https://www.swiggy.com/city/darjeeling/best-restaurants",
              },
              {
                text: "Best Restaurants in Jalpaiguri",
                link: "https://www.swiggy.com/city/jalpaiguri/best-restaurants",
              },
              {
                text: "Best Restaurants in Chittorgarh",
                link: "https://www.swiggy.com/city/chittorgarh/best-restaurants",
              },
              {
                text: "Best Restaurants in Dholpur",
                link: "https://www.swiggy.com/city/dholpur/best-restaurants",
              },
              {
                text: "Best Restaurants in Uluberia",
                link: "https://www.swiggy.com/city/uluberia/best-restaurants",
              },
              {
                text: "Best Restaurants in Nabadwip",
                link: "https://www.swiggy.com/city/nabadwip/best-restaurants",
              },
              {
                text: "Best Restaurants in Bongaon",
                link: "https://www.swiggy.com/city/bongaon/best-restaurants",
              },
              {
                text: "Best Restaurants in Kanchrapara",
                link: "https://www.swiggy.com/city/kanchrapara/best-restaurants",
              },
              {
                text: "Best Restaurants in Habra",
                link: "https://www.swiggy.com/city/habra/best-restaurants",
              },
              {
                text: "Best Restaurants in Firozabad",
                link: "https://www.swiggy.com/city/firozabad/best-restaurants",
              },
              {
                text: "Best Restaurants in Nalgonda",
                link: "https://www.swiggy.com/city/nalgonda/best-restaurants",
              },
              {
                text: "Best Restaurants in Chandrapur",
                link: "https://www.swiggy.com/city/chandrapur/best-restaurants",
              },
              {
                text: "Best Restaurants in Bijapur",
                link: "https://www.swiggy.com/city/bijapur/best-restaurants",
              },
              {
                text: "Best Restaurants in Bhusawal",
                link: "https://www.swiggy.com/city/bhusawal/best-restaurants",
              },
              {
                text: "Best Restaurants in Raichur",
                link: "https://www.swiggy.com/city/raichur/best-restaurants",
              },
              {
                text: "Best Restaurants in Bahraich",
                link: "https://www.swiggy.com/city/bahraich/best-restaurants",
              },
              {
                text: "Best Restaurants in Azamgarh",
                link: "https://www.swiggy.com/city/azamgarh/best-restaurants",
              },
              {
                text: "Best Restaurants in Bahadurgarh",
                link: "https://www.swiggy.com/city/bahadurgarh/best-restaurants",
              },
              {
                text: "Best Restaurants in Jind",
                link: "https://www.swiggy.com/city/jind/best-restaurants",
              },
              {
                text: "Best Restaurants in Rewari",
                link: "https://www.swiggy.com/city/rewari/best-restaurants",
              },
              {
                text: "Best Restaurants in Palwal",
                link: "https://www.swiggy.com/city/palwal/best-restaurants",
              },
              {
                text: "Best Restaurants in Hathras",
                link: "https://www.swiggy.com/city/hathras/best-restaurants",
              },
              {
                text: "Best Restaurants in Sambalpur",
                link: "https://www.swiggy.com/city/sambalpur/best-restaurants",
              },
              {
                text: "Best Restaurants in Banda",
                link: "https://www.swiggy.com/city/banda/best-restaurants",
              },
              {
                text: "Best Restaurants in Hoshiarpur",
                link: "https://www.swiggy.com/city/hoshiarpur/best-restaurants",
              },
              {
                text: "Best Restaurants in Faridkot",
                link: "https://www.swiggy.com/city/faridkot/best-restaurants",
              },
              {
                text: "Best Restaurants in Mandsaur",
                link: "https://www.swiggy.com/city/mandsaur/best-restaurants",
              },
              {
                text: "Best Restaurants in Suryapet",
                link: "https://www.swiggy.com/city/suryapet/best-restaurants",
              },
              {
                text: "Best Restaurants in Adilabad",
                link: "https://www.swiggy.com/city/adilabad/best-restaurants",
              },
              {
                text: "Best Restaurants in Narasaraopet",
                link: "https://www.swiggy.com/city/narasaraopet/best-restaurants",
              },
              {
                text: "Best Restaurants in Faizabad",
                link: "https://www.swiggy.com/city/faizabad/best-restaurants",
              },
              {
                text: "Best Restaurants in Tadpatri",
                link: "https://www.swiggy.com/city/tadpatri/best-restaurants",
              },
              {
                text: "Best Restaurants in Gonda",
                link: "https://www.swiggy.com/city/gonda/best-restaurants",
              },
              {
                text: "Best Restaurants in Mughalsarai",
                link: "https://www.swiggy.com/city/mughalsarai/best-restaurants",
              },
              {
                text: "Best Restaurants in Medinipur",
                link: "https://www.swiggy.com/city/medinipur/best-restaurants",
              },
              {
                text: "Best Restaurants in Nagda",
                link: "https://www.swiggy.com/city/nagda/best-restaurants",
              },
              {
                text: "Best Restaurants in Raiganj",
                link: "https://www.swiggy.com/city/raiganj/best-restaurants",
              },
              {
                text: "Best Restaurants in Deoria City",
                link: "https://www.swiggy.com/city/deoria-city/best-restaurants",
              },
              {
                text: "Best Restaurants in Sultanpur",
                link: "https://www.swiggy.com/city/sultanpur/best-restaurants",
              },
              {
                text: "Best Restaurants in Shamli",
                link: "https://www.swiggy.com/city/shamli/best-restaurants",
              },
              {
                text: "Best Restaurants in Krishnanagar",
                link: "https://www.swiggy.com/city/krishnanagar/best-restaurants",
              },
              {
                text: "Best Restaurants in Ballia",
                link: "https://www.swiggy.com/city/ballia/best-restaurants",
              },
              {
                text: "Best Restaurants in Guntakal",
                link: "https://www.swiggy.com/city/guntakal/best-restaurants",
              },
              {
                text: "Best Restaurants in Miryalaguda",
                link: "https://www.swiggy.com/city/miryalaguda/best-restaurants",
              },
              {
                text: "Best Restaurants in Etah",
                link: "https://www.swiggy.com/city/etah/best-restaurants",
              },
              {
                text: "Best Restaurants in Berhampore",
                link: "https://www.swiggy.com/city/berhampore/best-restaurants",
              },
              {
                text: "Best Restaurants in Gudivada",
                link: "https://www.swiggy.com/city/gudivada/best-restaurants",
              },
              {
                text: "Best Restaurants in Haldia",
                link: "https://www.swiggy.com/city/haldia/best-restaurants",
              },
              {
                text: "Best Restaurants in Santipur",
                link: "https://www.swiggy.com/city/santipur/best-restaurants",
              },
              {
                text: "Best Restaurants in Basirhat",
                link: "https://www.swiggy.com/city/basirhat/best-restaurants",
              },
              {
                text: "Best Restaurants in Udgir",
                link: "https://www.swiggy.com/city/udgir/best-restaurants",
              },
              {
                text: "Best Restaurants in Proddatur",
                link: "https://www.swiggy.com/city/proddatur/best-restaurants",
              },
              {
                text: "Best Restaurants in Nagapattinam",
                link: "https://www.swiggy.com/city/nagapattinam/best-restaurants",
              },
              {
                text: "Best Restaurants in Chikmagalur",
                link: "https://www.swiggy.com/city/chikmagalur/best-restaurants",
              },
              {
                text: "Best Restaurants in Chandausi",
                link: "https://www.swiggy.com/city/chandausi/best-restaurants",
              },
              {
                text: "Best Restaurants in Bhind",
                link: "https://www.swiggy.com/city/bhind/best-restaurants",
              },
              {
                text: "Best Restaurants in Mandya",
                link: "https://www.swiggy.com/city/mandya/best-restaurants",
              },
              {
                text: "Best Restaurants in Bagalkot",
                link: "https://www.swiggy.com/city/bagalkot/best-restaurants",
              },
              {
                text: "Best Restaurants in Nandurbar",
                link: "https://www.swiggy.com/city/nandurbar/best-restaurants",
              },
              {
                text: "Best Restaurants in Chitradurga",
                link: "https://www.swiggy.com/city/chitradurga/best-restaurants",
              },
              {
                text: "Best Restaurants in Osmanabad",
                link: "https://www.swiggy.com/city/osmanabad/best-restaurants",
              },
              {
                text: "Best Restaurants in Modinagar",
                link: "https://www.swiggy.com/city/modinagar/best-restaurants",
              },
              {
                text: "Best Restaurants in Gadag-Betigeri",
                link: "https://www.swiggy.com/city/gadag-betigeri/best-restaurants",
              },
              {
                text: "Best Restaurants in Hoshangabad",
                link: "https://www.swiggy.com/city/hoshangabad/best-restaurants",
              },
              {
                text: "Best Restaurants in Jaunpur",
                link: "https://www.swiggy.com/city/jaunpur/best-restaurants",
              },
              {
                text: "Best Restaurants in Port Blair",
                link: "https://www.swiggy.com/city/port-blair/best-restaurants",
              },
              {
                text: "Best Restaurants in Jorhat",
                link: "https://www.swiggy.com/city/jorhat/best-restaurants",
              },
              {
                text: "Best Restaurants in Nandyal",
                link: "https://www.swiggy.com/city/nandyal/best-restaurants",
              },
              {
                text: "Best Restaurants in Biharsharif",
                link: "https://www.swiggy.com/city/biharsharif/best-restaurants",
              },
              {
                text: "Best Restaurants in Buxar",
                link: "https://www.swiggy.com/city/buxar/best-restaurants",
              },
              {
                text: "Best Restaurants in Siwan",
                link: "https://www.swiggy.com/city/siwan/best-restaurants",
              },
              {
                text: "Best Restaurants in Dehri",
                link: "https://www.swiggy.com/city/dehri/best-restaurants",
              },
              {
                text: "Best Restaurants in Bettiah",
                link: "https://www.swiggy.com/city/bettiah/best-restaurants",
              },
              {
                text: "Best Restaurants in Kishanganj",
                link: "https://www.swiggy.com/city/kishanganj/best-restaurants",
              },
              {
                text: "Best Restaurants in Saharsa",
                link: "https://www.swiggy.com/city/saharsa/best-restaurants",
              },
              {
                text: "Best Restaurants in Hajipur",
                link: "https://www.swiggy.com/city/hajipur/best-restaurants",
              },
              {
                text: "Best Restaurants in Motihari",
                link: "https://www.swiggy.com/city/motihari/best-restaurants",
              },
              {
                text: "Best Restaurants in Sasaram",
                link: "https://www.swiggy.com/city/sasaram/best-restaurants",
              },
              {
                text: "Best Restaurants in Munger",
                link: "https://www.swiggy.com/city/munger/best-restaurants",
              },
              {
                text: "Best Restaurants in Katihar",
                link: "https://www.swiggy.com/city/katihar/best-restaurants",
              },
              {
                text: "Best Restaurants in Arrah",
                link: "https://www.swiggy.com/city/arrah/best-restaurants",
              },
              {
                text: "Best Restaurants in Srikakulam",
                link: "https://www.swiggy.com/city/srikakulam/best-restaurants",
              },
              {
                text: "Best Restaurants in Begusarai",
                link: "https://www.swiggy.com/city/begusarai/best-restaurants",
              },
              {
                text: "Best Restaurants in Neyveli",
                link: "https://www.swiggy.com/city/neyveli/best-restaurants",
              },
              {
                text: "Best Restaurants in Waidhan",
                link: "https://www.swiggy.com/city/waidhan/best-restaurants",
              },
              {
                text: "Best Restaurants in Markapur",
                link: "https://www.swiggy.com/city/markapur/best-restaurants",
              },
              {
                text: "Best Restaurants in Chikkaballapur",
                link: "https://www.swiggy.com/city/chikkaballapur/best-restaurants",
              },
              {
                text: "Best Restaurants in Bhatkal",
                link: "https://www.swiggy.com/city/bhatkal/best-restaurants",
              },
              {
                text: "Best Restaurants in Gokak",
                link: "https://www.swiggy.com/city/gokak/best-restaurants",
              },
              {
                text: "Best Restaurants in Itarsi",
                link: "https://www.swiggy.com/city/itarsi/best-restaurants",
              },
              {
                text: "Best Restaurants in Dhar",
                link: "https://www.swiggy.com/city/dhar/best-restaurants",
              },
              {
                text: "Best Restaurants in Chalisgaon",
                link: "https://www.swiggy.com/city/chalisgaon/best-restaurants",
              },
              {
                text: "Best Restaurants in Thiruvallur",
                link: "https://www.swiggy.com/city/thiruvallur/best-restaurants",
              },
              {
                text: "Best Restaurants in Namakkal",
                link: "https://www.swiggy.com/city/namakkal/best-restaurants",
              },
              {
                text: "Best Restaurants in Dharmapuri",
                link: "https://www.swiggy.com/city/dharmapuri/best-restaurants",
              },
              {
                text: "Best Restaurants in Bhandara",
                link: "https://www.swiggy.com/city/bhandara/best-restaurants",
              },
              {
                text: "Best Restaurants in Virudhunagar",
                link: "https://www.swiggy.com/city/virudhunagar/best-restaurants",
              },
              {
                text: "Best Restaurants in Siddipet",
                link: "https://www.swiggy.com/city/siddipet/best-restaurants",
              },
              {
                text: "Best Restaurants in Gadwal",
                link: "https://www.swiggy.com/city/gadwal/best-restaurants",
              },
              {
                text: "Best Restaurants in Bodhan-Rural",
                link: "https://www.swiggy.com/city/bodhan-rural/best-restaurants",
              },
              {
                text: "Best Restaurants in Kamareddy",
                link: "https://www.swiggy.com/city/kamareddy/best-restaurants",
              },
              {
                text: "Best Restaurants in Jhunjhunu",
                link: "https://www.swiggy.com/city/jhunjhunu/best-restaurants",
              },
              {
                text: "Best Restaurants in Kapurthala",
                link: "https://www.swiggy.com/city/kapurthala/best-restaurants",
              },
              {
                text: "Best Restaurants in Sangrur",
                link: "https://www.swiggy.com/city/sangrur/best-restaurants",
              },
              {
                text: "Best Restaurants in Gurdaspur",
                link: "https://www.swiggy.com/city/gurdaspur/best-restaurants",
              },
              {
                text: "Best Restaurants in Ramgarh",
                link: "https://www.swiggy.com/city/ramgarh/best-restaurants",
              },
              {
                text: "Best Restaurants in Bantwal",
                link: "https://www.swiggy.com/city/bantwal/best-restaurants",
              },
              {
                text: "Best Restaurants in Doddaballapura",
                link: "https://www.swiggy.com/city/doddaballapura/best-restaurants",
              },
              {
                text: "Best Restaurants in Buldana",
                link: "https://www.swiggy.com/city/buldana/best-restaurants",
              },
              {
                text: "Best Restaurants in Karad",
                link: "https://www.swiggy.com/city/karad/best-restaurants",
              },
              {
                text: "Best Restaurants in Krishnagiri",
                link: "https://www.swiggy.com/city/krishnagiri/best-restaurants",
              },
              {
                text: "Best Restaurants in Tiptur",
                link: "https://www.swiggy.com/city/tiptur/best-restaurants",
              },
              {
                text: "Best Restaurants in Bhadrachalam",
                link: "https://www.swiggy.com/city/bhadrachalam/best-restaurants",
              },
              {
                text: "Best Restaurants in Mancherial",
                link: "https://www.swiggy.com/city/mancherial/best-restaurants",
              },
              {
                text: "Best Restaurants in Balrampur",
                link: "https://www.swiggy.com/city/balrampur/best-restaurants",
              },
              {
                text: "Best Restaurants in Bharabanki",
                link: "https://www.swiggy.com/city/bharabanki/best-restaurants",
              },
              {
                text: "Best Restaurants in Malout",
                link: "https://www.swiggy.com/city/malout/best-restaurants",
              },
              {
                text: "Best Restaurants in Fatehgarh Sahib",
                link: "https://www.swiggy.com/city/fatehgarh-sahib/best-restaurants",
              },
              {
                text: "Best Restaurants in Ropar",
                link: "https://www.swiggy.com/city/ropar/best-restaurants",
              },
              {
                text: "Best Restaurants in Nangal",
                link: "https://www.swiggy.com/city/nangal/best-restaurants",
              },
              {
                text: "Best Restaurants in Narnaul",
                link: "https://www.swiggy.com/city/narnaul/best-restaurants",
              },
              {
                text: "Best Restaurants in Naraingarh",
                link: "https://www.swiggy.com/city/naraingarh/best-restaurants",
              },
              {
                text: "Best Restaurants in Himmatnagar",
                link: "https://www.swiggy.com/city/himmatnagar/best-restaurants",
              },
              {
                text: "Best Restaurants in Dausa",
                link: "https://www.swiggy.com/city/dausa/best-restaurants",
              },
              {
                text: "Best Restaurants in Jahanabad",
                link: "https://www.swiggy.com/city/jahanabad/best-restaurants",
              },
              {
                text: "Best Restaurants in Samastipur",
                link: "https://www.swiggy.com/city/samastipur/best-restaurants",
              },
              {
                text: "Best Restaurants in Purnea",
                link: "https://www.swiggy.com/city/purnea/best-restaurants",
              },
              {
                text: "Best Restaurants in Berhampur",
                link: "https://www.swiggy.com/city/berhampur/best-restaurants",
              },
              {
                text: "Best Restaurants in Malda",
                link: "https://www.swiggy.com/city/malda/best-restaurants",
              },
              {
                text: "Best Restaurants in Tuni",
                link: "https://www.swiggy.com/city/tuni/best-restaurants",
              },
              {
                text: "Best Restaurants in Puttur",
                link: "https://www.swiggy.com/city/puttur/best-restaurants",
              },
              {
                text: "Best Restaurants in Rayachoty",
                link: "https://www.swiggy.com/city/rayachoty/best-restaurants",
              },
              {
                text: "Best Restaurants in Nirmal",
                link: "https://www.swiggy.com/city/nirmal/best-restaurants",
              },
              {
                text: "Best Restaurants in Mirzapur",
                link: "https://www.swiggy.com/city/mirzapur/best-restaurants",
              },
              {
                text: "Best Restaurants in Tanuku",
                link: "https://www.swiggy.com/city/tanuku/best-restaurants",
              },
              {
                text: "Best Restaurants in Dahod",
                link: "https://www.swiggy.com/city/dahod/best-restaurants",
              },
              {
                text: "Best Restaurants in Barmer",
                link: "https://www.swiggy.com/city/barmer/best-restaurants",
              },
              {
                text: "Best Restaurants in Gangapur City",
                link: "https://www.swiggy.com/city/gangapur-city/best-restaurants",
              },
              {
                text: "Best Restaurants in Mandi Gobindgarh",
                link: "https://www.swiggy.com/city/mandi-gobindgarh/best-restaurants",
              },
              {
                text: "Best Restaurants in Tarn Taran Sahib",
                link: "https://www.swiggy.com/city/tarn-taran-sahib/best-restaurants",
              },
              {
                text: "Best Restaurants in Nakodar",
                link: "https://www.swiggy.com/city/nakodar/best-restaurants",
              },
              {
                text: "Best Restaurants in Ankleshwar",
                link: "https://www.swiggy.com/city/ankleshwar/best-restaurants",
              },
              {
                text: "Best Restaurants in Vyara",
                link: "https://www.swiggy.com/city/vyara/best-restaurants",
              },
              {
                text: "Best Restaurants in Bardoli",
                link: "https://www.swiggy.com/city/bardoli/best-restaurants",
              },
              {
                text: "Best Restaurants in Halol",
                link: "https://www.swiggy.com/city/halol/best-restaurants",
              },
              {
                text: "Best Restaurants in Bijnor",
                link: "https://www.swiggy.com/city/bijnor/best-restaurants",
              },
              {
                text: "Best Restaurants in Sangamner",
                link: "https://www.swiggy.com/city/sangamner/best-restaurants",
              },
              {
                text: "Best Restaurants in Baramati",
                link: "https://www.swiggy.com/city/baramati/best-restaurants",
              },
              {
                text: "Best Restaurants in Betul",
                link: "https://www.swiggy.com/city/betul/best-restaurants",
              },
              {
                text: "Best Restaurants in Chhatarpur",
                link: "https://www.swiggy.com/city/chhatarpur/best-restaurants",
              },
              {
                text: "Best Restaurants in Balaghat",
                link: "https://www.swiggy.com/city/balaghat/best-restaurants",
              },
              {
                text: "Best Restaurants in Sivakasi",
                link: "https://www.swiggy.com/city/sivakasi/best-restaurants",
              },
              {
                text: "Best Restaurants in Viluppuram",
                link: "https://www.swiggy.com/city/viluppuram/best-restaurants",
              },
              {
                text: "Best Restaurants in Ramanathapuram",
                link: "https://www.swiggy.com/city/ramanathapuram/best-restaurants",
              },
              {
                text: "Best Restaurants in Sirsi",
                link: "https://www.swiggy.com/city/sirsi/best-restaurants",
              },
              {
                text: "Best Restaurants in Theni",
                link: "https://www.swiggy.com/city/theni/best-restaurants",
              },
              {
                text: "Best Restaurants in Karur",
                link: "https://www.swiggy.com/city/karur/best-restaurants",
              },
              {
                text: "Best Restaurants in Karwar",
                link: "https://www.swiggy.com/city/karwar/best-restaurants",
              },
              {
                text: "Best Restaurants in Sindhanur",
                link: "https://www.swiggy.com/city/sindhanur/best-restaurants",
              },
              {
                text: "Best Restaurants in Kannur",
                link: "https://www.swiggy.com/city/kannur/best-restaurants",
              },
              {
                text: "Best Restaurants in Noida 1",
                link: "https://www.swiggy.com/city/noida-1/best-restaurants",
              },
              {
                text: "Best Restaurants in Thiruvalla",
                link: "https://www.swiggy.com/city/thiruvalla/best-restaurants",
              },
              {
                text: "Best Restaurants in Thodupuzha",
                link: "https://www.swiggy.com/city/thodupuzha/best-restaurants",
              },
              {
                text: "Best Restaurants in Kadiri",
                link: "https://www.swiggy.com/city/kadiri/best-restaurants",
              },
              {
                text: "Best Restaurants in Kavali",
                link: "https://www.swiggy.com/city/kavali/best-restaurants",
              },
              {
                text: "Best Restaurants in Tezpur",
                link: "https://www.swiggy.com/city/tezpur/best-restaurants",
              },
              {
                text: "Best Restaurants in Kayamkulam",
                link: "https://www.swiggy.com/city/kayamkulam/best-restaurants",
              },
              {
                text: "Best Restaurants in Kottarakkara",
                link: "https://www.swiggy.com/city/kottarakkara/best-restaurants",
              },
              {
                text: "Best Restaurants in Mandi Dabwali",
                link: "https://www.swiggy.com/city/mandi-dabwali/best-restaurants",
              },
              {
                text: "Best Restaurants in Fatehabad",
                link: "https://www.swiggy.com/city/fatehabad/best-restaurants",
              },
              {
                text: "Best Restaurants in Jagraon",
                link: "https://www.swiggy.com/city/jagraon/best-restaurants",
              },
              {
                text: "Best Restaurants in Mansa",
                link: "https://www.swiggy.com/city/mansa/best-restaurants",
              },
              {
                text: "Best Restaurants in Pinjore City",
                link: "https://www.swiggy.com/city/pinjore-city/best-restaurants",
              },
              {
                text: "Best Restaurants in Fazilka",
                link: "https://www.swiggy.com/city/fazilka/best-restaurants",
              },
              {
                text: "Best Restaurants in Baddi",
                link: "https://www.swiggy.com/city/baddi/best-restaurants",
              },
              {
                text: "Best Restaurants in Solan",
                link: "https://www.swiggy.com/city/solan/best-restaurants",
              },
              {
                text: "Best Restaurants in Daltonganj",
                link: "https://www.swiggy.com/city/daltonganj/best-restaurants",
              },
              {
                text: "Best Restaurants in Balangir",
                link: "https://www.swiggy.com/city/balangir/best-restaurants",
              },
              {
                text: "Best Restaurants in Kothagudem",
                link: "https://www.swiggy.com/city/kothagudem/best-restaurants",
              },
              {
                text: "Best Restaurants in Hansi",
                link: "https://www.swiggy.com/city/hansi/best-restaurants",
              },
              {
                text: "Best Restaurants in Aurangabad_Bihar",
                link: "https://www.swiggy.com/city/aurangabadbihar/best-restaurants",
              },
              {
                text: "Best Restaurants in Gopalganj",
                link: "https://www.swiggy.com/city/gopalganj/best-restaurants",
              },
              {
                text: "Best Restaurants in Jharsuguda",
                link: "https://www.swiggy.com/city/jharsuguda/best-restaurants",
              },
              {
                text: "Best Restaurants in Tohana",
                link: "https://www.swiggy.com/city/tohana/best-restaurants",
              },
              {
                text: "Best Restaurants in Jhalawar",
                link: "https://www.swiggy.com/city/jhalawar/best-restaurants",
              },
              {
                text: "Best Restaurants in Sivasagar",
                link: "https://www.swiggy.com/city/sivasagar/best-restaurants",
              },
              {
                text: "Best Restaurants in Bagdogra",
                link: "https://www.swiggy.com/city/bagdogra/best-restaurants",
              },
              {
                text: "Best Restaurants in Kendrapada",
                link: "https://www.swiggy.com/city/kendrapada/best-restaurants",
              },
              {
                text: "Best Restaurants in Mallapuram (Do not Use)",
                link: "https://www.swiggy.com/city/mallapuram-do-not-use/best-restaurants",
              },
              {
                text: "Best Restaurants in Veraval",
                link: "https://www.swiggy.com/city/veraval/best-restaurants",
              },
              {
                text: "Best Restaurants in Daman",
                link: "https://www.swiggy.com/city/daman/best-restaurants",
              },
              {
                text: "Best Restaurants in Chiplun",
                link: "https://www.swiggy.com/city/chiplun/best-restaurants",
              },
              {
                text: "Best Restaurants in Silvassa",
                link: "https://www.swiggy.com/city/silvassa/best-restaurants",
              },
              {
                text: "Best Restaurants in Lonavla",
                link: "https://www.swiggy.com/city/lonavla/best-restaurants",
              },
              {
                text: "Best Restaurants in Bongaigaon",
                link: "https://www.swiggy.com/city/bongaigaon/best-restaurants",
              },
              {
                text: "Best Restaurants in Golaghat",
                link: "https://www.swiggy.com/city/golaghat/best-restaurants",
              },
              {
                text: "Best Restaurants in Duliajan",
                link: "https://www.swiggy.com/city/duliajan/best-restaurants",
              },
              {
                text: "Best Restaurants in Bolpur",
                link: "https://www.swiggy.com/city/bolpur/best-restaurants",
              },
              {
                text: "Best Restaurants in Madhubani",
                link: "https://www.swiggy.com/city/madhubani/best-restaurants",
              },
              {
                text: "Best Restaurants in Balasore",
                link: "https://www.swiggy.com/city/balasore/best-restaurants",
              },
              {
                text: "Best Restaurants in Palampur",
                link: "https://www.swiggy.com/city/palampur/best-restaurants",
              },
              {
                text: "Best Restaurants in Kotdwar",
                link: "https://www.swiggy.com/city/kotdwar/best-restaurants",
              },
              {
                text: "Best Restaurants in Koppal",
                link: "https://www.swiggy.com/city/koppal/best-restaurants",
              },
              {
                text: "Best Restaurants in Chikhli",
                link: "https://www.swiggy.com/city/chikhli/best-restaurants",
              },
              {
                text: "Best Restaurants in Dahanu",
                link: "https://www.swiggy.com/city/dahanu/best-restaurants",
              },
              {
                text: "Best Restaurants in Itanagar",
                link: "https://www.swiggy.com/city/itanagar/best-restaurants",
              },
              {
                text: "Best Restaurants in Rangpo",
                link: "https://www.swiggy.com/city/rangpo/best-restaurants",
              },
              {
                text: "Best Restaurants in Aizawl",
                link: "https://www.swiggy.com/city/aizawl/best-restaurants",
              },
              {
                text: "Best Restaurants in Gangtok",
                link: "https://www.swiggy.com/city/gangtok/best-restaurants",
              },
              {
                text: "Best Restaurants in Mayiladuthurai",
                link: "https://www.swiggy.com/city/mayiladuthurai/best-restaurants",
              },
              {
                text: "Best Restaurants in Kannauj",
                link: "https://www.swiggy.com/city/kannauj/best-restaurants",
              },
              {
                text: "Best Restaurants in Cooch Behar",
                link: "https://www.swiggy.com/city/cooch-behar/best-restaurants",
              },
              {
                text: "Best Restaurants in Palani",
                link: "https://www.swiggy.com/city/palani/best-restaurants",
              },
              {
                text: "Best Restaurants in Bilimora",
                link: "https://www.swiggy.com/city/bilimora/best-restaurants",
              },
              {
                text: "Best Restaurants in Boisar",
                link: "https://www.swiggy.com/city/boisar/best-restaurants",
              },
              {
                text: "Best Restaurants in Kohima",
                link: "https://www.swiggy.com/city/kohima/best-restaurants",
              },
              {
                text: "Best Restaurants in Naharlagun",
                link: "https://www.swiggy.com/city/naharlagun/best-restaurants",
              },
              {
                text: "Best Restaurants in Dumka",
                link: "https://www.swiggy.com/city/dumka/best-restaurants",
              },
              {
                text: "Best Restaurants in Rajsamand",
                link: "https://www.swiggy.com/city/rajsamand/best-restaurants",
              },
              {
                text: "Best Restaurants in Gauriganj",
                link: "https://www.swiggy.com/city/gauriganj/best-restaurants",
              },
              {
                text: "Best Restaurants in Bodinayakanur",
                link: "https://www.swiggy.com/city/bodinayakanur/best-restaurants",
              },
              {
                text: "Best Restaurants in Bhawanipatna",
                link: "https://www.swiggy.com/city/bhawanipatna/best-restaurants",
              },
              {
                text: "Best Restaurants in Baran",
                link: "https://www.swiggy.com/city/baran/best-restaurants",
              },
              {
                text: "Best Restaurants in Narsinghpur",
                link: "https://www.swiggy.com/city/narsinghpur/best-restaurants",
              },
              {
                text: "Best Restaurants in Kovilpatti",
                link: "https://www.swiggy.com/city/kovilpatti/best-restaurants",
              },
              {
                text: "Best Restaurants in Pusad",
                link: "https://www.swiggy.com/city/pusad/best-restaurants",
              },
              {
                text: "Best Restaurants in Kendujhar",
                link: "https://www.swiggy.com/city/kendujhar/best-restaurants",
              },
              {
                text: "Best Restaurants in Manali",
                link: "https://www.swiggy.com/city/manali/best-restaurants",
              },
              {
                text: "Best Restaurants in Diu",
                link: "https://www.swiggy.com/city/diu/best-restaurants",
              },
              {
                text: "Best Restaurants in Khamgaon",
                link: "https://www.swiggy.com/city/khamgaon/best-restaurants",
              },
              {
                text: "Best Restaurants in Ramanagara",
                link: "https://www.swiggy.com/city/ramanagara/best-restaurants",
              },
              {
                text: "Best Restaurants in Alipurduar",
                link: "https://www.swiggy.com/city/alipurduar/best-restaurants",
              },
              {
                text: "Best Restaurants in Almora",
                link: "https://www.swiggy.com/city/almora/best-restaurants",
              },
              {
                text: "Best Restaurants in Jhargram",
                link: "https://www.swiggy.com/city/jhargram/best-restaurants",
              },
              {
                text: "Best Restaurants in Arambagh",
                link: "https://www.swiggy.com/city/arambagh/best-restaurants",
              },
              {
                text: "Best Restaurants in Bhadohi",
                link: "https://www.swiggy.com/city/bhadohi/best-restaurants",
              },
              {
                text: "Best Restaurants in Tenkasi",
                link: "https://www.swiggy.com/city/tenkasi/best-restaurants",
              },
              {
                text: "Best Restaurants in Srivilliputhur",
                link: "https://www.swiggy.com/city/srivilliputhur/best-restaurants",
              },
              {
                text: "Best Restaurants in Chidambaram",
                link: "https://www.swiggy.com/city/chidambaram/best-restaurants",
              },
              {
                text: "Best Restaurants in Rajgarh",
                link: "https://www.swiggy.com/city/rajgarh/best-restaurants",
              },
              {
                text: "Best Restaurants in Pratapgarh",
                link: "https://www.swiggy.com/city/pratapgarh/best-restaurants",
              },
              {
                text: "Best Restaurants in Washim",
                link: "https://www.swiggy.com/city/washim/best-restaurants",
              },
              {
                text: "Best Restaurants in Raghunathpur",
                link: "https://www.swiggy.com/city/raghunathpur/best-restaurants",
              },
              {
                text: "Best Restaurants in Suri",
                link: "https://www.swiggy.com/city/suri/best-restaurants",
              },
              {
                text: "Best Restaurants in Kadayanallur",
                link: "https://www.swiggy.com/city/kadayanallur/best-restaurants",
              },
              {
                text: "Best Restaurants in Thiruvarur",
                link: "https://www.swiggy.com/city/thiruvarur/best-restaurants",
              },
              {
                text: "Best Restaurants in Ranaghat-WB",
                link: "https://www.swiggy.com/city/ranaghat-wb/best-restaurants",
              },
              {
                text: "Best Restaurants in Wayanad",
                link: "https://www.swiggy.com/city/wayanad/best-restaurants",
              },
              {
                text: "Best Restaurants in Perambalur",
                link: "https://www.swiggy.com/city/perambalur/best-restaurants",
              },
              {
                text: "Best Restaurants in Paramakudi",
                link: "https://www.swiggy.com/city/paramakudi/best-restaurants",
              },
              {
                text: "Best Restaurants in Bela Pratapgarh",
                link: "https://www.swiggy.com/city/bela-pratapgarh/best-restaurants",
              },
              {
                text: "Best Restaurants in Mahoba",
                link: "https://www.swiggy.com/city/mahoba/best-restaurants",
              },
              {
                text: "Best Restaurants in Sitamarhi",
                link: "https://www.swiggy.com/city/sitamarhi/best-restaurants",
              },
              {
                text: "Best Restaurants in Chakdaha",
                link: "https://www.swiggy.com/city/chakdaha/best-restaurants",
              },
              {
                text: "Best Restaurants in Khalilabad",
                link: "https://www.swiggy.com/city/khalilabad/best-restaurants",
              },
              {
                text: "Best Restaurants in Pattukkottai",
                link: "https://www.swiggy.com/city/pattukkottai/best-restaurants",
              },
              {
                text: "Best Restaurants in Tindivanam",
                link: "https://www.swiggy.com/city/tindivanam/best-restaurants",
              },
              {
                text: "Best Restaurants in Tiruttani",
                link: "https://www.swiggy.com/city/tiruttani/best-restaurants",
              },
              {
                text: "Best Restaurants in Gangarampur",
                link: "https://www.swiggy.com/city/gangarampur/best-restaurants",
              },
              {
                text: "Best Restaurants in Dharapuram",
                link: "https://www.swiggy.com/city/dharapuram/best-restaurants",
              },
              {
                text: "Best Restaurants in Arakkonam",
                link: "https://www.swiggy.com/city/arakkonam/best-restaurants",
              },
              {
                text: "Best Restaurants in Sirkali",
                link: "https://www.swiggy.com/city/sirkali/best-restaurants",
              },
              {
                text: "Best Restaurants in Mettupalayam",
                link: "https://www.swiggy.com/city/mettupalayam/best-restaurants",
              },
              {
                text: "Best Restaurants in Digboi",
                link: "https://www.swiggy.com/city/digboi/best-restaurants",
              },
              {
                text: "Best Restaurants in Biswanath Chariali",
                link: "https://www.swiggy.com/city/biswanath-chariali/best-restaurants",
              },
              {
                text: "Best Restaurants in Nalbari",
                link: "https://www.swiggy.com/city/nalbari/best-restaurants",
              },
              {
                text: "Best Restaurants in Shirdi city",
                link: "https://www.swiggy.com/city/shirdi-city/best-restaurants",
              },
              {
                text: "Best Restaurants in Mukerian",
                link: "https://www.swiggy.com/city/mukerian/best-restaurants",
              },
              {
                text: "Best Restaurants in Hosur",
                link: "https://www.swiggy.com/city/hosur/best-restaurants",
              },
              {
                text: "Best Restaurants in Palakollu",
                link: "https://www.swiggy.com/city/palakollu/best-restaurants",
              },
              {
                text: "Best Restaurants in Ravulapalem",
                link: "https://www.swiggy.com/city/ravulapalem/best-restaurants",
              },
              {
                text: "Best Restaurants in Barh",
                link: "https://www.swiggy.com/city/barh/best-restaurants",
              },
              {
                text: "Best Restaurants in Palghar",
                link: "https://www.swiggy.com/city/palghar/best-restaurants",
              },
              {
                text: "Best Restaurants in Kushalnagar",
                link: "https://www.swiggy.com/city/kushalnagar/best-restaurants",
              },
              {
                text: "Best Restaurants in Dungarpur",
                link: "https://www.swiggy.com/city/dungarpur/best-restaurants",
              },
              {
                text: "Best Restaurants in Chaibasa",
                link: "https://www.swiggy.com/city/chaibasa/best-restaurants",
              },
              {
                text: "Best Restaurants in Haveri",
                link: "https://www.swiggy.com/city/haveri/best-restaurants",
              },
              {
                text: "Best Restaurants in Karaikal",
                link: "https://www.swiggy.com/city/karaikal/best-restaurants",
              },
              {
                text: "Best Restaurants in Jjajjar",
                link: "https://www.swiggy.com/city/jjajjar/best-restaurants",
              },
              {
                text: "Best Restaurants in Kokrajhar",
                link: "https://www.swiggy.com/city/kokrajhar/best-restaurants",
              },
              {
                text: "Best Restaurants in Rangia",
                link: "https://www.swiggy.com/city/rangia/best-restaurants",
              },
              {
                text: "Best Restaurants in Hamirpur",
                link: "https://www.swiggy.com/city/hamirpur/best-restaurants",
              },
              {
                text: "Best Restaurants in Una",
                link: "https://www.swiggy.com/city/una/best-restaurants",
              },
              {
                text: "Best Restaurants in Sulthan Bathery",
                link: "https://www.swiggy.com/city/sulthan-bathery/best-restaurants",
              },
              {
                text: "Best Restaurants in Rayagada",
                link: "https://www.swiggy.com/city/rayagada/best-restaurants",
              },
              {
                text: "Best Restaurants in Paradeep",
                link: "https://www.swiggy.com/city/paradeep/best-restaurants",
              },
              {
                text: "Best Restaurants in Mandapeta",
                link: "https://www.swiggy.com/city/mandapeta/best-restaurants",
              },
              {
                text: "Best Restaurants in Jamui",
                link: "https://www.swiggy.com/city/jamui/best-restaurants",
              },
              {
                text: "Best Restaurants in Pilkhuwa",
                link: "https://www.swiggy.com/city/pilkhuwa/best-restaurants",
              },
              {
                text: "Best Restaurants in Parvathipuram",
                link: "https://www.swiggy.com/city/parvathipuram/best-restaurants",
              },
              {
                text: "Best Restaurants in Ambajogai",
                link: "https://www.swiggy.com/city/ambajogai/best-restaurants",
              },
              {
                text: "Best Restaurants in Araria",
                link: "https://www.swiggy.com/city/araria/best-restaurants",
              },
              {
                text: "Best Restaurants in North Lakhimpur",
                link: "https://www.swiggy.com/city/north-lakhimpur/best-restaurants",
              },
              {
                text: "Best Restaurants in Rajampet",
                link: "https://www.swiggy.com/city/rajampet/best-restaurants",
              },
              {
                text: "Best Restaurants in Udumalaipettai",
                link: "https://www.swiggy.com/city/udumalaipettai/best-restaurants",
              },
              {
                text: "Best Restaurants in Tirupattur",
                link: "https://www.swiggy.com/city/tirupattur/best-restaurants",
              },
              {
                text: "Best Restaurants in Hojai",
                link: "https://www.swiggy.com/city/hojai/best-restaurants",
              },
              {
                text: "Best Restaurants in Khagaria",
                link: "https://www.swiggy.com/city/khagaria/best-restaurants",
              },
              {
                text: "Best Restaurants in Dasuya",
                link: "https://www.swiggy.com/city/dasuya/best-restaurants",
              },
              {
                text: "Best Restaurants in Gudur",
                link: "https://www.swiggy.com/city/gudur/best-restaurants",
              },
              {
                text: "Best Restaurants in Sullurpeta",
                link: "https://www.swiggy.com/city/sullurpeta/best-restaurants",
              },
              {
                text: "Best Restaurants in Piler",
                link: "https://www.swiggy.com/city/piler/best-restaurants",
              },
              {
                text: "Best Restaurants in SankaranKoil",
                link: "https://www.swiggy.com/city/sankarankoil/best-restaurants",
              },
              {
                text: "Best Restaurants in Nabha",
                link: "https://www.swiggy.com/city/nabha/best-restaurants",
              },
              {
                text: "Best Restaurants in LPU - Phagwara",
                link: "https://www.swiggy.com/city/lpu-phagwara/best-restaurants",
              },
              {
                text: "Best Restaurants in Jangipur",
                link: "https://www.swiggy.com/city/jangipur/best-restaurants",
              },
              {
                text: "Best Restaurants in Roha",
                link: "https://www.swiggy.com/city/roha/best-restaurants",
              },
            ],
            id: "best_city_link",
          },
        },
      },
      {
        card: {
          card: {
            "@type":
              "type.googleapis.com/swiggy.seo.widgets.v1.CuisinesContent",
            title: "Best Cuisines Near Me",
            facetId: "catalog_cuisines",
            cuisines: [
              {
                text: "Afghani Restaurant Near Me",
                id: "query_afghani",
                link: "https://www.swiggy.com/afghani-restaurants-near-me",
              },
              {
                text: "American Restaurant Near Me",
                id: "query_american",
                link: "https://www.swiggy.com/american-restaurants-near-me",
              },
              {
                text: "Andhra Restaurant Near Me",
                id: "query_andhra",
                link: "https://www.swiggy.com/andhra-restaurants-near-me",
              },
              {
                text: "Arabian Restaurant Near Me",
                id: "query_arabian",
                link: "https://www.swiggy.com/arabian-restaurants-near-me",
              },
              {
                text: "Asian Restaurant Near Me",
                id: "query_asian",
                link: "https://www.swiggy.com/asian-restaurants-near-me",
              },
              {
                text: "Awadhi Restaurant Near Me",
                id: "query_awadhi",
                link: "https://www.swiggy.com/awadhi-restaurants-near-me",
              },
              {
                text: "Bakery Restaurant Near Me",
                id: "query_bakery",
                link: "https://www.swiggy.com/bakery-restaurants-near-me",
              },
              {
                text: "Barbecue Restaurant Near Me",
                id: "query_barbecue",
                link: "https://www.swiggy.com/barbecue-restaurants-near-me",
              },
              {
                text: "Bengali Restaurant Near Me",
                id: "query_bengali",
                link: "https://www.swiggy.com/bengali-restaurants-near-me",
              },
              {
                text: "Beverages Restaurant Near Me",
                id: "query_beverages",
                link: "https://www.swiggy.com/beverages-restaurants-near-me",
              },
              {
                text: "Bihari Restaurant Near Me",
                id: "query_bihari",
                link: "https://www.swiggy.com/bihari-restaurants-near-me",
              },
              {
                text: "Biryani Restaurant Near Me",
                id: "query_biryani",
                link: "https://www.swiggy.com/biryani-restaurants-near-me",
              },
              {
                text: "British Restaurant Near Me",
                id: "query_british",
                link: "https://www.swiggy.com/british-restaurants-near-me",
              },
              {
                text: "Burgers Restaurant Near Me",
                id: "query_burgers",
                link: "https://www.swiggy.com/burgers-restaurants-near-me",
              },
              {
                text: "Burmese Restaurant Near Me",
                id: "query_burmese",
                link: "https://www.swiggy.com/burmese-restaurants-near-me",
              },
              {
                text: "Cafe Restaurant Near Me",
                id: "query_cafe",
                link: "https://www.swiggy.com/cafe-restaurants-near-me",
              },
              {
                text: "Chaat Restaurant Near Me",
                id: "query_chaat",
                link: "https://www.swiggy.com/chaat-restaurants-near-me",
              },
              {
                text: "Chinese Restaurant Near Me",
                id: "query_chinese",
                link: "https://www.swiggy.com/chinese-restaurants-near-me",
              },
              {
                text: "Combo Restaurant Near Me",
                id: "query_combo",
                link: "https://www.swiggy.com/combo-restaurants-near-me",
              },
              {
                text: "Continental Restaurant Near Me",
                id: "query_continental",
                link: "https://www.swiggy.com/continental-restaurants-near-me",
              },
              {
                text: "Desserts Restaurant Near Me",
                id: "query_desserts",
                link: "https://www.swiggy.com/desserts-restaurants-near-me",
              },
              {
                text: "Fast Food Restaurant Near Me",
                id: "query_fast_food",
                link: "https://www.swiggy.com/fast-food-restaurants-near-me",
              },
              {
                text: "Grill Restaurant Near Me",
                id: "query_grill",
                link: "https://www.swiggy.com/grill-restaurants-near-me",
              },
              {
                text: "Healthy Food Restaurant Near Me",
                id: "query_healthy_food",
                link: "https://www.swiggy.com/healthy-food-restaurants-near-me",
              },
              {
                text: "Home Food Restaurant Near Me",
                id: "query_home_food",
                link: "https://www.swiggy.com/home-food-restaurants-near-me",
              },
              {
                text: "Hyderabadi Restaurant Near Me",
                id: "query_hyderabadi",
                link: "https://www.swiggy.com/hyderabadi-restaurants-near-me",
              },
              {
                text: "Ice Cream Restaurant Near Me",
                id: "query_ice_cream",
                link: "https://www.swiggy.com/ice-cream-restaurants-near-me",
              },
              {
                text: "Ice Cream Cakes Restaurant Near Me",
                id: "query_ice_cream_cakes",
                link: "https://www.swiggy.com/ice-cream-cakes-restaurants-near-me",
              },
              {
                text: "Indian Restaurant Near Me",
                id: "query_indian",
                link: "https://www.swiggy.com/indian-restaurants-near-me",
              },
              {
                text: "Italian Restaurant Near Me",
                id: "query_italian",
                link: "https://www.swiggy.com/italian-restaurants-near-me",
              },
              {
                text: "Italian-American Restaurant Near Me",
                id: "query_italian-american",
                link: "https://www.swiggy.com/italian-american-restaurants-near-me",
              },
              {
                text: "Japanese Restaurant Near Me",
                id: "query_japanese",
                link: "https://www.swiggy.com/japanese-restaurants-near-me",
              },
              {
                text: "Juices Restaurant Near Me",
                id: "query_juices",
                link: "https://www.swiggy.com/juices-restaurants-near-me",
              },
              {
                text: "Kebabs Restaurant Near Me",
                id: "query_kebabs",
                link: "https://www.swiggy.com/kebabs-restaurants-near-me",
              },
              {
                text: "Keto Restaurant Near Me",
                id: "query_keto",
                link: "https://www.swiggy.com/keto-restaurants-near-me",
              },
              {
                text: "Lebanese Restaurant Near Me",
                id: "query_lebanese",
                link: "https://www.swiggy.com/lebanese-restaurants-near-me",
              },
              {
                text: "Lucknowi Restaurant Near Me",
                id: "query_lucknowi",
                link: "https://www.swiggy.com/lucknowi-restaurants-near-me",
              },
              {
                text: "Maharashtrian Restaurant Near Me",
                id: "query_maharashtrian",
                link: "https://www.swiggy.com/maharashtrian-restaurants-near-me",
              },
              {
                text: "Mangalorean Restaurant Near Me",
                id: "query_mangalorean",
                link: "https://www.swiggy.com/mangalorean-restaurants-near-me",
              },
              {
                text: "Mexican Restaurant Near Me",
                id: "query_mexican",
                link: "https://www.swiggy.com/mexican-restaurants-near-me",
              },
              {
                text: "Mughlai Restaurant Near Me",
                id: "query_mughlai",
                link: "https://www.swiggy.com/mughlai-restaurants-near-me",
              },
              {
                text: "Nepalese Restaurant Near Me",
                id: "query_nepalese",
                link: "https://www.swiggy.com/nepalese-restaurants-near-me",
              },
              {
                text: "North Eastern Restaurant Near Me",
                id: "query_north_eastern",
                link: "https://www.swiggy.com/north-eastern-restaurants-near-me",
              },
              {
                text: "North Indian Restaurant Near Me",
                id: "query_north_indian",
                link: "https://www.swiggy.com/north-indian-restaurants-near-me",
              },
              {
                text: "Oriental Restaurant Near Me",
                id: "query_oriental",
                link: "https://www.swiggy.com/oriental-restaurants-near-me",
              },
              {
                text: "Paan Restaurant Near Me",
                id: "query_paan",
                link: "https://www.swiggy.com/paan-restaurants-near-me",
              },
              {
                text: "Pan-Asian Restaurant Near Me",
                id: "query_pan-asian",
                link: "https://www.swiggy.com/pan-asian-restaurants-near-me",
              },
              {
                text: "Pastas Restaurant Near Me",
                id: "query_pastas",
                link: "https://www.swiggy.com/pastas-restaurants-near-me",
              },
              {
                text: "Pizzas Restaurant Near Me",
                id: "query_pizzas",
                link: "https://www.swiggy.com/pizzas-restaurants-near-me",
              },
              {
                text: "Portuguese Restaurant Near Me",
                id: "query_portuguese",
                link: "https://www.swiggy.com/portuguese-restaurants-near-me",
              },
              {
                text: "Punjabi Restaurant Near Me",
                id: "query_punjabi",
                link: "https://www.swiggy.com/punjabi-restaurants-near-me",
              },
              {
                text: "Rajasthani Restaurant Near Me",
                id: "query_rajasthani",
                link: "https://www.swiggy.com/rajasthani-restaurants-near-me",
              },
              {
                text: "Salads Restaurant Near Me",
                id: "query_salads",
                link: "https://www.swiggy.com/salads-restaurants-near-me",
              },
              {
                text: "Seafood Restaurant Near Me",
                id: "query_seafood",
                link: "https://www.swiggy.com/seafood-restaurants-near-me",
              },
              {
                text: "Sindhi Restaurant Near Me",
                id: "query_sindhi",
                link: "https://www.swiggy.com/sindhi-restaurants-near-me",
              },
              {
                text: "Snacks Restaurant Near Me",
                id: "query_snacks",
                link: "https://www.swiggy.com/snacks-restaurants-near-me",
              },
              {
                text: "South Indian Restaurant Near Me",
                id: "query_south_indian",
                link: "https://www.swiggy.com/south-indian-restaurants-near-me",
              },
              {
                text: "Street Food Restaurant Near Me",
                id: "query_street_food",
                link: "https://www.swiggy.com/street-food-restaurants-near-me",
              },
              {
                text: "Sushi Restaurant Near Me",
                id: "query_sushi",
                link: "https://www.swiggy.com/sushi-restaurants-near-me",
              },
              {
                text: "Sweets Restaurant Near Me",
                id: "query_sweets",
                link: "https://www.swiggy.com/sweets-restaurants-near-me",
              },
              {
                text: "Tandoor Restaurant Near Me",
                id: "query_tandoor",
                link: "https://www.swiggy.com/tandoor-restaurants-near-me",
              },
              {
                text: "Thai Restaurant Near Me",
                id: "query_thai",
                link: "https://www.swiggy.com/thai-restaurants-near-me",
              },
              {
                text: "Thalis Restaurant Near Me",
                id: "query_thalis",
                link: "https://www.swiggy.com/thalis-restaurants-near-me",
              },
              {
                text: "Tibetan Restaurant Near Me",
                id: "query_tibetan",
                link: "https://www.swiggy.com/tibetan-restaurants-near-me",
              },
              {
                text: "Waffle Restaurant Near Me",
                id: "query_waffle",
                link: "https://www.swiggy.com/waffle-restaurants-near-me",
              },
            ],
            id: "cuisines_near_you",
          },
        },
      },
      {
        card: {
          card: {
            "@type": "type.googleapis.com/swiggy.seo.widgets.v1.BrandsContent",
            title: "Explore Every Restaurants Near Me",
            brands: [
              {
                text: "Explore Restaurants Near Me",
                link: "https://www.swiggy.com/restaurants-near-me",
              },
              {
                text: "Explore Top Rated Restaurants Near Me",
                link: "https://www.swiggy.com/best-restaurants-near-me",
              },
            ],
            id: "restaurant_near_me_links",
          },
        },
      },
      {
        card: {
          card: {
            "@type":
              "type.googleapis.com/swiggy.seo.widgets.v1.AppInstallLinks",
            title: "For better experience,download the Swiggy app now",
            androidAppImage: "portal/m/play_store.png",
            androidAppLink:
              "https://play.google.com/store/apps/details?id=in.swiggy.android&referrer=utm_source%3Dswiggy%26utm_medium%3Dheader",
            iosAppImage: "portal/m/app_store.png",
            iosAppLink:
              "https://itunes.apple.com/in/app/id989540920?referrer=utm_source%3Dswiggy%26utm_medium%3Dhomepage",
            id: "app_install_links",
          },
        },
      },
      {
        card: {
          card: {
            "@type": "type.googleapis.com/swiggy.seo.widgets.v1.FooterContent",
            cities: [
              {
                text: "Bangalore",
                link: "https://www.swiggy.com/city/bangalore",
              },
              {
                text: "Gurgaon",
                link: "https://www.swiggy.com/city/gurgaon",
              },
              {
                text: "Hyderabad",
                link: "https://www.swiggy.com/city/hyderabad",
              },
              {
                text: "Delhi",
                link: "https://www.swiggy.com/city/delhi",
              },
              {
                text: "Mumbai",
                link: "https://www.swiggy.com/city/mumbai",
              },
              {
                text: "Pune",
                link: "https://www.swiggy.com/city/pune",
              },
              {
                text: "Kolkata",
                link: "https://www.swiggy.com/city/kolkata",
              },
              {
                text: "Chennai",
                link: "https://www.swiggy.com/city/chennai",
              },
              {
                text: "Ahmedabad",
                link: "https://www.swiggy.com/city/ahmedabad",
              },
              {
                text: "Chandigarh",
                link: "https://www.swiggy.com/city/chandigarh",
              },
              {
                text: "Jaipur",
                link: "https://www.swiggy.com/city/jaipur",
              },
              {
                text: "Kochi",
                link: "https://www.swiggy.com/city/kochi",
              },
              {
                text: "Coimbatore",
                link: "https://www.swiggy.com/city/coimbatore",
              },
              {
                text: "Lucknow",
                link: "https://www.swiggy.com/city/lucknow",
              },
              {
                text: "Nagpur",
                link: "https://www.swiggy.com/city/nagpur",
              },
              {
                text: "Vadodara",
                link: "https://www.swiggy.com/city/vadodara",
              },
              {
                text: "Indore",
                link: "https://www.swiggy.com/city/indore",
              },
              {
                text: "Guwahati",
                link: "https://www.swiggy.com/city/guwahati",
              },
              {
                text: "Vizag",
                link: "https://www.swiggy.com/city/vizag",
              },
              {
                text: "Surat",
                link: "https://www.swiggy.com/city/surat",
              },
              {
                text: "Dehradun",
                link: "https://www.swiggy.com/city/dehradun",
              },
              {
                text: "Noida",
                link: "https://www.swiggy.com/city/noida",
              },
              {
                text: "Ludhiana",
                link: "https://www.swiggy.com/city/ludhiana",
              },
              {
                text: "Trichy",
                link: "https://www.swiggy.com/city/trichy",
              },
              {
                text: "Vijayawada",
                link: "https://www.swiggy.com/city/vijayawada",
              },
              {
                text: "Kanpur",
                link: "https://www.swiggy.com/city/kanpur",
              },
              {
                text: "Mysore",
                link: "https://www.swiggy.com/city/mysore",
              },
              {
                text: "Nashik",
                link: "https://www.swiggy.com/city/nashik",
              },
              {
                text: "Pondicherry",
                link: "https://www.swiggy.com/city/pondicherry",
              },
              {
                text: "Agra",
                link: "https://www.swiggy.com/city/agra",
              },
              {
                text: "Aurangabad",
                link: "https://www.swiggy.com/city/aurangabad",
              },
              {
                text: "Jalandhar",
                link: "https://www.swiggy.com/city/jalandhar",
              },
              {
                text: "Kota",
                link: "https://www.swiggy.com/city/kota",
              },
              {
                text: "Madurai",
                link: "https://www.swiggy.com/city/madurai",
              },
              {
                text: "Allahabad",
                link: "https://www.swiggy.com/city/allahabad",
              },
              {
                text: "Manipal",
                link: "https://www.swiggy.com/city/manipal",
              },
              {
                text: "Amritsar",
                link: "https://www.swiggy.com/city/amritsar",
              },
              {
                text: "Bareilly",
                link: "https://www.swiggy.com/city/bareilly",
              },
              {
                text: "Meerut",
                link: "https://www.swiggy.com/city/meerut",
              },
              {
                text: "Bhopal",
                link: "https://www.swiggy.com/city/bhopal",
              },
              {
                text: "Ooty",
                link: "https://www.swiggy.com/city/ooty",
              },
              {
                text: "Bhubaneswar",
                link: "https://www.swiggy.com/city/bhubaneswar",
              },
              {
                text: "Raipur",
                link: "https://www.swiggy.com/city/raipur",
              },
              {
                text: "Bikaner",
                link: "https://www.swiggy.com/city/bikaner",
              },
              {
                text: "Rajkot",
                link: "https://www.swiggy.com/city/rajkot",
              },
              {
                text: "Kozhikode",
                link: "https://www.swiggy.com/city/kozhikode",
              },
              {
                text: "Central Goa",
                link: "https://www.swiggy.com/city/central-goa",
              },
              {
                text: "Sirsa",
                link: "https://www.swiggy.com/city/sirsa",
              },
              {
                text: "Gwalior",
                link: "https://www.swiggy.com/city/gwalior",
              },
              {
                text: "Thrissur",
                link: "https://www.swiggy.com/city/thrissur",
              },
              {
                text: "Kharagpur",
                link: "https://www.swiggy.com/city/kharagpur",
              },
              {
                text: "Tirupati",
                link: "https://www.swiggy.com/city/tirupati",
              },
              {
                text: "Tirupur",
                link: "https://www.swiggy.com/city/tirupur",
              },
              {
                text: "Vellore",
                link: "https://www.swiggy.com/city/vellore",
              },
              {
                text: "Thiruvananthapuram",
                link: "https://www.swiggy.com/city/thiruvananthapuram",
              },
              {
                text: "Warangal",
                link: "https://www.swiggy.com/city/warangal",
              },
              {
                text: "Varanasi",
                link: "https://www.swiggy.com/city/varanasi",
              },
              {
                text: "Mangaluru",
                link: "https://www.swiggy.com/city/mangaluru",
              },
              {
                text: "Patna",
                link: "https://www.swiggy.com/city/patna",
              },
              {
                text: "Ranchi",
                link: "https://www.swiggy.com/city/ranchi",
              },
              {
                text: "Faridabad",
                link: "https://www.swiggy.com/city/faridabad",
              },
              {
                text: "Guntur",
                link: "https://www.swiggy.com/city/guntur",
              },
              {
                text: "Ujjain",
                link: "https://www.swiggy.com/city/ujjain",
              },
              {
                text: "Patiala",
                link: "https://www.swiggy.com/city/patiala",
              },
              {
                text: "Karnal",
                link: "https://www.swiggy.com/city/karnal",
              },
              {
                text: "Kakinada",
                link: "https://www.swiggy.com/city/kakinada",
              },
              {
                text: "Rajahmundry",
                link: "https://www.swiggy.com/city/rajahmundry",
              },
              {
                text: "Bilaspur",
                link: "https://www.swiggy.com/city/bilaspur",
              },
              {
                text: "Bhilai",
                link: "https://www.swiggy.com/city/bhilai",
              },
              {
                text: "Anand",
                link: "https://www.swiggy.com/city/anand",
              },
              {
                text: "Bhavnagar",
                link: "https://www.swiggy.com/city/bhavnagar",
              },
              {
                text: "Jammu",
                link: "https://www.swiggy.com/city/jammu",
              },
              {
                text: "Muktsar",
                link: "https://www.swiggy.com/city/muktsar",
              },
              {
                text: "Panipat",
                link: "https://www.swiggy.com/city/panipat",
              },
              {
                text: "Dhanbad",
                link: "https://www.swiggy.com/city/dhanbad",
              },
              {
                text: "Hubli",
                link: "https://www.swiggy.com/city/hubli",
              },
              {
                text: "Belgaum",
                link: "https://www.swiggy.com/city/belgaum",
              },
              {
                text: "Jabalpur",
                link: "https://www.swiggy.com/city/jabalpur",
              },
              {
                text: "Kolhapur",
                link: "https://www.swiggy.com/city/kolhapur",
              },
              {
                text: "Solapur",
                link: "https://www.swiggy.com/city/solapur",
              },
              {
                text: "Shillong",
                link: "https://www.swiggy.com/city/shillong",
              },
              {
                text: "Cuttack",
                link: "https://www.swiggy.com/city/cuttack",
              },
              {
                text: "Aligarh",
                link: "https://www.swiggy.com/city/aligarh",
              },
              {
                text: "Salem",
                link: "https://www.swiggy.com/city/salem",
              },
              {
                text: "Jodhpur",
                link: "https://www.swiggy.com/city/jodhpur",
              },
              {
                text: "Ajmer",
                link: "https://www.swiggy.com/city/ajmer",
              },
              {
                text: "Jhansi",
                link: "https://www.swiggy.com/city/jhansi",
              },
              {
                text: "Gorakhpur",
                link: "https://www.swiggy.com/city/gorakhpur",
              },
              {
                text: "Thanjavur",
                link: "https://www.swiggy.com/city/thanjavur",
              },
              {
                text: "Erode",
                link: "https://www.swiggy.com/city/erode",
              },
              {
                text: "Nellore",
                link: "https://www.swiggy.com/city/nellore",
              },
              {
                text: "Rourkela",
                link: "https://www.swiggy.com/city/rourkela",
              },
              {
                text: "Anantapur",
                link: "https://www.swiggy.com/city/anantapur",
              },
              {
                text: "Kurnool",
                link: "https://www.swiggy.com/city/kurnool",
              },
              {
                text: "Ahmednagar",
                link: "https://www.swiggy.com/city/ahmednagar",
              },
              {
                text: "Phagwara",
                link: "https://www.swiggy.com/city/phagwara",
              },
              {
                text: "Ambala",
                link: "https://www.swiggy.com/city/ambala",
              },
              {
                text: "Ballari",
                link: "https://www.swiggy.com/city/ballari",
              },
              {
                text: "Saharanpur",
                link: "https://www.swiggy.com/city/saharanpur",
              },
              {
                text: "Tirunelveli",
                link: "https://www.swiggy.com/city/tirunelveli",
              },
              {
                text: "Bathinda",
                link: "https://www.swiggy.com/city/bathinda",
              },
              {
                text: "Mathura",
                link: "https://www.swiggy.com/city/mathura",
              },
              {
                text: "Haridwar",
                link: "https://www.swiggy.com/city/haridwar",
              },
              {
                text: "Ratnagiri",
                link: "https://www.swiggy.com/city/ratnagiri",
              },
              {
                text: "Sangli",
                link: "https://www.swiggy.com/city/sangli",
              },
              {
                text: "Amravati",
                link: "https://www.swiggy.com/city/amravati",
              },
              {
                text: "Rishikesh",
                link: "https://www.swiggy.com/city/rishikesh",
              },
              {
                text: "Nagercoil",
                link: "https://www.swiggy.com/city/nagercoil",
              },
              {
                text: "KanyaKumari",
                link: "https://www.swiggy.com/city/kanyakumari",
              },
              {
                text: "Kadapa",
                link: "https://www.swiggy.com/city/kadapa",
              },
              {
                text: "Nizamabad",
                link: "https://www.swiggy.com/city/nizamabad",
              },
              {
                text: "Shivamogga",
                link: "https://www.swiggy.com/city/shivamogga",
              },
              {
                text: "Davanagere",
                link: "https://www.swiggy.com/city/davanagere",
              },
              {
                text: "Roorkee",
                link: "https://www.swiggy.com/city/roorkee",
              },
              {
                text: "Nanded",
                link: "https://www.swiggy.com/city/nanded",
              },
              {
                text: "Rewa",
                link: "https://www.swiggy.com/city/rewa",
              },
              {
                text: "Satna",
                link: "https://www.swiggy.com/city/satna",
              },
              {
                text: "Muzaffarpur",
                link: "https://www.swiggy.com/city/muzaffarpur",
              },
              {
                text: "Valsad",
                link: "https://www.swiggy.com/city/valsad",
              },
              {
                text: "Vapi",
                link: "https://www.swiggy.com/city/vapi",
              },
              {
                text: "Chhapra",
                link: "https://www.swiggy.com/city/chhapra",
              },
              {
                text: "Dharamshala",
                link: "https://www.swiggy.com/city/dharamshala",
              },
              {
                text: "Kollam",
                link: "https://www.swiggy.com/city/kollam",
              },
              {
                text: "Silchar",
                link: "https://www.swiggy.com/city/silchar",
              },
              {
                text: "Alappuzha",
                link: "https://www.swiggy.com/city/alappuzha",
              },
              {
                text: "Sonipat",
                link: "https://www.swiggy.com/city/sonipat",
              },
              {
                text: "Rohtak",
                link: "https://www.swiggy.com/city/rohtak",
              },
              {
                text: "Mehsana",
                link: "https://www.swiggy.com/city/mehsana",
              },
              {
                text: "Kullu",
                link: "https://www.swiggy.com/city/kullu",
              },
              {
                text: "Dhule",
                link: "https://www.swiggy.com/city/dhule",
              },
              {
                text: "Dharwad",
                link: "https://www.swiggy.com/city/dharwad",
              },
              {
                text: "Latur",
                link: "https://www.swiggy.com/city/latur",
              },
              {
                text: "Vizianagaram",
                link: "https://www.swiggy.com/city/vizianagaram",
              },
              {
                text: "Khammam",
                link: "https://www.swiggy.com/city/khammam",
              },
              {
                text: "Hampi",
                link: "https://www.swiggy.com/city/hampi",
              },
              {
                text: "Nainital",
                link: "https://www.swiggy.com/city/nainital",
              },
              {
                text: "Akola",
                link: "https://www.swiggy.com/city/akola",
              },
              {
                text: "Kalaburagi",
                link: "https://www.swiggy.com/city/kalaburagi",
              },
              {
                text: "Gaya",
                link: "https://www.swiggy.com/city/gaya",
              },
              {
                text: "Muzaffarnagar",
                link: "https://www.swiggy.com/city/muzaffarnagar",
              },
              {
                text: "Dewas",
                link: "https://www.swiggy.com/city/dewas",
              },
              {
                text: "Korba",
                link: "https://www.swiggy.com/city/korba",
              },
              {
                text: "Mussoorie",
                link: "https://www.swiggy.com/city/mussoorie",
              },
              {
                text: "Jalgaon",
                link: "https://www.swiggy.com/city/jalgaon",
              },
              {
                text: "Yamuna Nagar",
                link: "https://www.swiggy.com/city/yamuna-nagar",
              },
              {
                text: "Bhagalpur",
                link: "https://www.swiggy.com/city/bhagalpur",
              },
              {
                text: "Hapur",
                link: "https://www.swiggy.com/city/hapur",
              },
              {
                text: "Morena",
                link: "https://www.swiggy.com/city/morena",
              },
              {
                text: "Hassan",
                link: "https://www.swiggy.com/city/hassan",
              },
              {
                text: "Hisar",
                link: "https://www.swiggy.com/city/hisar",
              },
              {
                text: "Godhra",
                link: "https://www.swiggy.com/city/godhra",
              },
              {
                text: "Kolar ",
                link: "https://www.swiggy.com/city/kolar",
              },
              {
                text: "Rampur",
                link: "https://www.swiggy.com/city/rampur",
              },
              {
                text: "Sitapur",
                link: "https://www.swiggy.com/city/sitapur",
              },
              {
                text: "Etawah",
                link: "https://www.swiggy.com/city/etawah",
              },
              {
                text: "Porbandar",
                link: "https://www.swiggy.com/city/porbandar",
              },
              {
                text: "Nadiad",
                link: "https://www.swiggy.com/city/nadiad",
              },
              {
                text: "Sagar",
                link: "https://www.swiggy.com/city/sagar",
              },
              {
                text: "Morbi",
                link: "https://www.swiggy.com/city/morbi",
              },
              {
                text: "Chhindwara",
                link: "https://www.swiggy.com/city/chhindwara",
              },
              {
                text: "Tumakuru",
                link: "https://www.swiggy.com/city/tumakuru",
              },
              {
                text: "Singrauli",
                link: "https://www.swiggy.com/city/singrauli",
              },
              {
                text: "Thoothukudi",
                link: "https://www.swiggy.com/city/thoothukudi",
              },
              {
                text: "Katni",
                link: "https://www.swiggy.com/city/katni",
              },
              {
                text: "Khandwa",
                link: "https://www.swiggy.com/city/khandwa",
              },
              {
                text: "Eluru",
                link: "https://www.swiggy.com/city/eluru",
              },
              {
                text: "Malappuram",
                link: "https://www.swiggy.com/city/malappuram",
              },
              {
                text: "Dibrugarh",
                link: "https://www.swiggy.com/city/dibrugarh",
              },
              {
                text: "Deoghar",
                link: "https://www.swiggy.com/city/deoghar",
              },
              {
                text: "Khanna",
                link: "https://www.swiggy.com/city/khanna",
              },
              {
                text: "Bidar",
                link: "https://www.swiggy.com/city/bidar",
              },
              {
                text: "Madikeri",
                link: "https://www.swiggy.com/city/madikeri",
              },
              {
                text: "Haldwani",
                link: "https://www.swiggy.com/city/haldwani",
              },
              {
                text: "Farrukhabad",
                link: "https://www.swiggy.com/city/farrukhabad",
              },
              {
                text: "Malegaon",
                link: "https://www.swiggy.com/city/malegaon",
              },
              {
                text: "Dindigul",
                link: "https://www.swiggy.com/city/dindigul",
              },
              {
                text: "Shahjahanpur",
                link: "https://www.swiggy.com/city/shahjahanpur",
              },
              {
                text: "Beed",
                link: "https://www.swiggy.com/city/beed",
              },
              {
                text: "Junagadh",
                link: "https://www.swiggy.com/city/junagadh",
              },
              {
                text: "Asansol",
                link: "https://www.swiggy.com/city/asansol",
              },
              {
                text: "Beawar",
                link: "https://www.swiggy.com/city/beawar",
              },
              {
                text: "Kishangarh",
                link: "https://www.swiggy.com/city/kishangarh",
              },
              {
                text: "Parbhani",
                link: "https://www.swiggy.com/city/parbhani",
              },
              {
                text: "Gondia",
                link: "https://www.swiggy.com/city/gondia",
              },
              {
                text: "Ichalkaranji",
                link: "https://www.swiggy.com/city/ichalkaranji",
              },
              {
                text: "Jalna",
                link: "https://www.swiggy.com/city/jalna",
              },
              {
                text: "Yavatmal",
                link: "https://www.swiggy.com/city/yavatmal",
              },
              {
                text: "Shivpuri",
                link: "https://www.swiggy.com/city/shivpuri",
              },
              {
                text: "Moga",
                link: "https://www.swiggy.com/city/moga",
              },
              {
                text: "Abohar",
                link: "https://www.swiggy.com/city/abohar",
              },
              {
                text: "Adoni",
                link: "https://www.swiggy.com/city/adoni",
              },
              {
                text: "Madanapalle",
                link: "https://www.swiggy.com/city/madanapalle",
              },
              {
                text: "Tiruvannamalai",
                link: "https://www.swiggy.com/city/tiruvannamalai",
              },
              {
                text: "Satara",
                link: "https://www.swiggy.com/city/satara",
              },
              {
                text: "Ambur",
                link: "https://www.swiggy.com/city/ambur",
              },
              {
                text: "Karimnagar",
                link: "https://www.swiggy.com/city/karimnagar",
              },
              {
                text: "Ratlam",
                link: "https://www.swiggy.com/city/ratlam",
              },
              {
                text: "Moradabad",
                link: "https://www.swiggy.com/city/moradabad",
              },
              {
                text: "Machilipatnam",
                link: "https://www.swiggy.com/city/machilipatnam",
              },
              {
                text: "Ongole",
                link: "https://www.swiggy.com/city/ongole",
              },
              {
                text: "Kottayam",
                link: "https://www.swiggy.com/city/kottayam",
              },
              {
                text: "Darbhanga",
                link: "https://www.swiggy.com/city/darbhanga",
              },
              {
                text: "Kurukshetra",
                link: "https://www.swiggy.com/city/kurukshetra",
              },
              {
                text: "Unnao",
                link: "https://www.swiggy.com/city/unnao",
              },
              {
                text: "Bulandshahr",
                link: "https://www.swiggy.com/city/bulandshahr",
              },
              {
                text: "Durgapur",
                link: "https://www.swiggy.com/city/durgapur",
              },
              {
                text: "Siliguri",
                link: "https://www.swiggy.com/city/siliguri",
              },
              {
                text: "Pali",
                link: "https://www.swiggy.com/city/pali",
              },
              {
                text: "Tadepalligudem",
                link: "https://www.swiggy.com/city/tadepalligudem",
              },
              {
                text: "Ramagundam",
                link: "https://www.swiggy.com/city/ramagundam",
              },
              {
                text: "Mahbubnagar",
                link: "https://www.swiggy.com/city/mahbubnagar",
              },
              {
                text: "Bhiwani",
                link: "https://www.swiggy.com/city/bhiwani",
              },
              {
                text: "Cuddalore",
                link: "https://www.swiggy.com/city/cuddalore",
              },
              {
                text: "Kaithal",
                link: "https://www.swiggy.com/city/kaithal",
              },
              {
                text: "Jagtial",
                link: "https://www.swiggy.com/city/jagtial",
              },
              {
                text: "Palakkad",
                link: "https://www.swiggy.com/city/palakkad",
              },
              {
                text: "Guna",
                link: "https://www.swiggy.com/city/guna",
              },
              {
                text: "Kumbakonam",
                link: "https://www.swiggy.com/city/kumbakonam",
              },
              {
                text: "Maunath Bhanjan",
                link: "https://www.swiggy.com/city/maunath-bhanjan",
              },
              {
                text: "Baripada",
                link: "https://www.swiggy.com/city/baripada",
              },
              {
                text: "Orai",
                link: "https://www.swiggy.com/city/orai",
              },
              {
                text: "Bhadrak",
                link: "https://www.swiggy.com/city/bhadrak",
              },
              {
                text: "Batala",
                link: "https://www.swiggy.com/city/batala",
              },
              {
                text: "Firozpur",
                link: "https://www.swiggy.com/city/firozpur",
              },
              {
                text: "Barnala",
                link: "https://www.swiggy.com/city/barnala",
              },
              {
                text: "Raigarh",
                link: "https://www.swiggy.com/city/raigarh",
              },
              {
                text: "Nagaon",
                link: "https://www.swiggy.com/city/nagaon",
              },
              {
                text: "Mainpuri",
                link: "https://www.swiggy.com/city/mainpuri",
              },
              {
                text: "Balurghat",
                link: "https://www.swiggy.com/city/balurghat",
              },
              {
                text: "Giridih",
                link: "https://www.swiggy.com/city/giridih",
              },
              {
                text: "Ghazipur",
                link: "https://www.swiggy.com/city/ghazipur",
              },
              {
                text: "Jagdalpur",
                link: "https://www.swiggy.com/city/jagdalpur",
              },
              {
                text: "Vidisha",
                link: "https://www.swiggy.com/city/vidisha",
              },
              {
                text: "Dimapur",
                link: "https://www.swiggy.com/city/dimapur",
              },
              {
                text: "Shikohabad",
                link: "https://www.swiggy.com/city/shikohabad",
              },
              {
                text: "Imphal",
                link: "https://www.swiggy.com/city/imphal",
              },
              {
                text: "Lakhimpur",
                link: "https://www.swiggy.com/city/lakhimpur",
              },
              {
                text: "Rudrapur",
                link: "https://www.swiggy.com/city/rudrapur",
              },
              {
                text: "Ambikapur",
                link: "https://www.swiggy.com/city/ambikapur",
              },
              {
                text: "Rae Bareli",
                link: "https://www.swiggy.com/city/rae-bareli",
              },
              {
                text: "Tinsukia",
                link: "https://www.swiggy.com/city/tinsukia",
              },
              {
                text: "Rajapalayam",
                link: "https://www.swiggy.com/city/rajapalayam",
              },
              {
                text: "Rajnandgaon",
                link: "https://www.swiggy.com/city/rajnandgaon",
              },
              {
                text: "Kashipur",
                link: "https://www.swiggy.com/city/kashipur",
              },
              {
                text: "Ranibennur",
                link: "https://www.swiggy.com/city/ranibennur",
              },
              {
                text: "Burhanpur",
                link: "https://www.swiggy.com/city/burhanpur",
              },
              {
                text: "Bhadravati",
                link: "https://www.swiggy.com/city/bhadravati",
              },
              {
                text: "Chittoor",
                link: "https://www.swiggy.com/city/chittoor",
              },
              {
                text: "Pudukkottai",
                link: "https://www.swiggy.com/city/pudukkottai",
              },
              {
                text: "Hardoi",
                link: "https://www.swiggy.com/city/hardoi",
              },
              {
                text: "Basti",
                link: "https://www.swiggy.com/city/basti",
              },
              {
                text: "Karaikkudi",
                link: "https://www.swiggy.com/city/karaikkudi",
              },
              {
                text: "Lalitpur",
                link: "https://www.swiggy.com/city/lalitpur",
              },
              {
                text: "Hospet",
                link: "https://www.swiggy.com/city/hospet",
              },
              {
                text: "Budaun",
                link: "https://www.swiggy.com/city/budaun",
              },
              {
                text: "Neemuch",
                link: "https://www.swiggy.com/city/neemuch",
              },
              {
                text: "Pilibhit",
                link: "https://www.swiggy.com/city/pilibhit",
              },
              {
                text: "Barshi",
                link: "https://www.swiggy.com/city/barshi",
              },
              {
                text: "Sri Ganganagar",
                link: "https://www.swiggy.com/city/sri-ganganagar",
              },
              {
                text: "Wardha",
                link: "https://www.swiggy.com/city/wardha",
              },
              {
                text: "Sehore",
                link: "https://www.swiggy.com/city/sehore",
              },
              {
                text: "Bhimavaram",
                link: "https://www.swiggy.com/city/bhimavaram",
              },
              {
                text: "Hanumangarh",
                link: "https://www.swiggy.com/city/hanumangarh",
              },
              {
                text: "Pathankot",
                link: "https://www.swiggy.com/city/pathankot",
              },
              {
                text: "Puri",
                link: "https://www.swiggy.com/city/puri",
              },
              {
                text: "Fatehpur",
                link: "https://www.swiggy.com/city/fatehpur",
              },
              {
                text: "Surendranagar Dudhrej",
                link: "https://www.swiggy.com/city/surendranagar-dudhrej",
              },
              {
                text: "Jamnagar",
                link: "https://www.swiggy.com/city/jamnagar",
              },
              {
                text: "Bhuj",
                link: "https://www.swiggy.com/city/bhuj",
              },
              {
                text: "Gandhidham",
                link: "https://www.swiggy.com/city/gandhidham",
              },
              {
                text: "Bharuch",
                link: "https://www.swiggy.com/city/bharuch",
              },
              {
                text: "Navsari",
                link: "https://www.swiggy.com/city/navsari",
              },
              {
                text: "Amreli",
                link: "https://www.swiggy.com/city/amreli",
              },
              {
                text: "Palanpur",
                link: "https://www.swiggy.com/city/palanpur",
              },
              {
                text: "Bhilwara",
                link: "https://www.swiggy.com/city/bhilwara",
              },
              {
                text: "Suratgarh",
                link: "https://www.swiggy.com/city/suratgarh",
              },
              {
                text: "Sikar",
                link: "https://www.swiggy.com/city/sikar",
              },
              {
                text: "Churu",
                link: "https://www.swiggy.com/city/churu",
              },
              {
                text: "Alwar",
                link: "https://www.swiggy.com/city/alwar",
              },
              {
                text: "Bhiwadi",
                link: "https://www.swiggy.com/city/bhiwadi",
              },
              {
                text: "Bharatpur",
                link: "https://www.swiggy.com/city/bharatpur",
              },
              {
                text: "Mount Abu",
                link: "https://www.swiggy.com/city/mount-abu",
              },
              {
                text: "Bundi",
                link: "https://www.swiggy.com/city/bundi",
              },
              {
                text: "Sawai Madhopur",
                link: "https://www.swiggy.com/city/sawai-madhopur",
              },
              {
                text: "Purulia",
                link: "https://www.swiggy.com/city/purulia",
              },
              {
                text: "Bardhaman",
                link: "https://www.swiggy.com/city/bardhaman",
              },
              {
                text: "Raniganj",
                link: "https://www.swiggy.com/city/raniganj",
              },
              {
                text: "Darjeeling",
                link: "https://www.swiggy.com/city/darjeeling",
              },
              {
                text: "Jalpaiguri",
                link: "https://www.swiggy.com/city/jalpaiguri",
              },
              {
                text: "Chittorgarh",
                link: "https://www.swiggy.com/city/chittorgarh",
              },
              {
                text: "Dholpur",
                link: "https://www.swiggy.com/city/dholpur",
              },
              {
                text: "Uluberia",
                link: "https://www.swiggy.com/city/uluberia",
              },
              {
                text: "Nabadwip",
                link: "https://www.swiggy.com/city/nabadwip",
              },
              {
                text: "Bongaon",
                link: "https://www.swiggy.com/city/bongaon",
              },
              {
                text: "Kanchrapara",
                link: "https://www.swiggy.com/city/kanchrapara",
              },
              {
                text: "Habra",
                link: "https://www.swiggy.com/city/habra",
              },
              {
                text: "Firozabad",
                link: "https://www.swiggy.com/city/firozabad",
              },
              {
                text: "Nalgonda",
                link: "https://www.swiggy.com/city/nalgonda",
              },
              {
                text: "Chandrapur",
                link: "https://www.swiggy.com/city/chandrapur",
              },
              {
                text: "Bijapur",
                link: "https://www.swiggy.com/city/bijapur",
              },
              {
                text: "Bhusawal",
                link: "https://www.swiggy.com/city/bhusawal",
              },
              {
                text: "Raichur",
                link: "https://www.swiggy.com/city/raichur",
              },
              {
                text: "Bahraich",
                link: "https://www.swiggy.com/city/bahraich",
              },
              {
                text: "Azamgarh",
                link: "https://www.swiggy.com/city/azamgarh",
              },
              {
                text: "Bahadurgarh",
                link: "https://www.swiggy.com/city/bahadurgarh",
              },
              {
                text: "Jind",
                link: "https://www.swiggy.com/city/jind",
              },
              {
                text: "Rewari",
                link: "https://www.swiggy.com/city/rewari",
              },
              {
                text: "Palwal",
                link: "https://www.swiggy.com/city/palwal",
              },
              {
                text: "Hathras",
                link: "https://www.swiggy.com/city/hathras",
              },
              {
                text: "Sambalpur",
                link: "https://www.swiggy.com/city/sambalpur",
              },
              {
                text: "Banda",
                link: "https://www.swiggy.com/city/banda",
              },
              {
                text: "Hoshiarpur",
                link: "https://www.swiggy.com/city/hoshiarpur",
              },
              {
                text: "Faridkot",
                link: "https://www.swiggy.com/city/faridkot",
              },
              {
                text: "Mandsaur",
                link: "https://www.swiggy.com/city/mandsaur",
              },
              {
                text: "Suryapet",
                link: "https://www.swiggy.com/city/suryapet",
              },
              {
                text: "Adilabad",
                link: "https://www.swiggy.com/city/adilabad",
              },
              {
                text: "Narasaraopet",
                link: "https://www.swiggy.com/city/narasaraopet",
              },
              {
                text: "Faizabad",
                link: "https://www.swiggy.com/city/faizabad",
              },
              {
                text: "Tadpatri",
                link: "https://www.swiggy.com/city/tadpatri",
              },
              {
                text: "Gonda",
                link: "https://www.swiggy.com/city/gonda",
              },
              {
                text: "Mughalsarai",
                link: "https://www.swiggy.com/city/mughalsarai",
              },
              {
                text: "Medinipur",
                link: "https://www.swiggy.com/city/medinipur",
              },
              {
                text: "Nagda",
                link: "https://www.swiggy.com/city/nagda",
              },
              {
                text: "Raiganj",
                link: "https://www.swiggy.com/city/raiganj",
              },
              {
                text: "Deoria City",
                link: "https://www.swiggy.com/city/deoria-city",
              },
              {
                text: "Sultanpur",
                link: "https://www.swiggy.com/city/sultanpur",
              },
              {
                text: "Shamli",
                link: "https://www.swiggy.com/city/shamli",
              },
              {
                text: "Krishnanagar",
                link: "https://www.swiggy.com/city/krishnanagar",
              },
              {
                text: "Ballia",
                link: "https://www.swiggy.com/city/ballia",
              },
              {
                text: "Guntakal",
                link: "https://www.swiggy.com/city/guntakal",
              },
              {
                text: "Miryalaguda",
                link: "https://www.swiggy.com/city/miryalaguda",
              },
              {
                text: "Etah",
                link: "https://www.swiggy.com/city/etah",
              },
              {
                text: "Berhampore",
                link: "https://www.swiggy.com/city/berhampore",
              },
              {
                text: "Gudivada",
                link: "https://www.swiggy.com/city/gudivada",
              },
              {
                text: "Haldia",
                link: "https://www.swiggy.com/city/haldia",
              },
              {
                text: "Santipur",
                link: "https://www.swiggy.com/city/santipur",
              },
              {
                text: "Basirhat",
                link: "https://www.swiggy.com/city/basirhat",
              },
              {
                text: "Udgir",
                link: "https://www.swiggy.com/city/udgir",
              },
              {
                text: "Proddatur",
                link: "https://www.swiggy.com/city/proddatur",
              },
              {
                text: "Nagapattinam",
                link: "https://www.swiggy.com/city/nagapattinam",
              },
              {
                text: "Chikmagalur",
                link: "https://www.swiggy.com/city/chikmagalur",
              },
              {
                text: "Chandausi",
                link: "https://www.swiggy.com/city/chandausi",
              },
              {
                text: "Bhind",
                link: "https://www.swiggy.com/city/bhind",
              },
              {
                text: "Mandya",
                link: "https://www.swiggy.com/city/mandya",
              },
              {
                text: "Bagalkot",
                link: "https://www.swiggy.com/city/bagalkot",
              },
              {
                text: "Nandurbar",
                link: "https://www.swiggy.com/city/nandurbar",
              },
              {
                text: "Chitradurga",
                link: "https://www.swiggy.com/city/chitradurga",
              },
              {
                text: "Osmanabad",
                link: "https://www.swiggy.com/city/osmanabad",
              },
              {
                text: "Modinagar",
                link: "https://www.swiggy.com/city/modinagar",
              },
              {
                text: "Gadag-Betigeri",
                link: "https://www.swiggy.com/city/gadag-betigeri",
              },
              {
                text: "Hoshangabad",
                link: "https://www.swiggy.com/city/hoshangabad",
              },
              {
                text: "Jaunpur",
                link: "https://www.swiggy.com/city/jaunpur",
              },
              {
                text: "Port Blair",
                link: "https://www.swiggy.com/city/port-blair",
              },
              {
                text: "Jorhat",
                link: "https://www.swiggy.com/city/jorhat",
              },
              {
                text: "Nandyal",
                link: "https://www.swiggy.com/city/nandyal",
              },
              {
                text: "Biharsharif",
                link: "https://www.swiggy.com/city/biharsharif",
              },
              {
                text: "Buxar",
                link: "https://www.swiggy.com/city/buxar",
              },
              {
                text: "Siwan",
                link: "https://www.swiggy.com/city/siwan",
              },
              {
                text: "Dehri",
                link: "https://www.swiggy.com/city/dehri",
              },
              {
                text: "Bettiah",
                link: "https://www.swiggy.com/city/bettiah",
              },
              {
                text: "Kishanganj",
                link: "https://www.swiggy.com/city/kishanganj",
              },
              {
                text: "Saharsa",
                link: "https://www.swiggy.com/city/saharsa",
              },
              {
                text: "Hajipur",
                link: "https://www.swiggy.com/city/hajipur",
              },
              {
                text: "Motihari",
                link: "https://www.swiggy.com/city/motihari",
              },
              {
                text: "Sasaram",
                link: "https://www.swiggy.com/city/sasaram",
              },
              {
                text: "Munger",
                link: "https://www.swiggy.com/city/munger",
              },
              {
                text: "Katihar",
                link: "https://www.swiggy.com/city/katihar",
              },
              {
                text: "Arrah",
                link: "https://www.swiggy.com/city/arrah",
              },
              {
                text: "Srikakulam",
                link: "https://www.swiggy.com/city/srikakulam",
              },
              {
                text: "Begusarai",
                link: "https://www.swiggy.com/city/begusarai",
              },
              {
                text: "Neyveli",
                link: "https://www.swiggy.com/city/neyveli",
              },
              {
                text: "Waidhan",
                link: "https://www.swiggy.com/city/waidhan",
              },
              {
                text: "Markapur",
                link: "https://www.swiggy.com/city/markapur",
              },
              {
                text: "Chikkaballapur",
                link: "https://www.swiggy.com/city/chikkaballapur",
              },
              {
                text: "Bhatkal",
                link: "https://www.swiggy.com/city/bhatkal",
              },
              {
                text: "Gokak",
                link: "https://www.swiggy.com/city/gokak",
              },
              {
                text: "Itarsi",
                link: "https://www.swiggy.com/city/itarsi",
              },
              {
                text: "Dhar",
                link: "https://www.swiggy.com/city/dhar",
              },
              {
                text: "Chalisgaon",
                link: "https://www.swiggy.com/city/chalisgaon",
              },
              {
                text: "Thiruvallur",
                link: "https://www.swiggy.com/city/thiruvallur",
              },
              {
                text: "Namakkal",
                link: "https://www.swiggy.com/city/namakkal",
              },
              {
                text: "Dharmapuri",
                link: "https://www.swiggy.com/city/dharmapuri",
              },
              {
                text: "Bhandara",
                link: "https://www.swiggy.com/city/bhandara",
              },
              {
                text: "Virudhunagar",
                link: "https://www.swiggy.com/city/virudhunagar",
              },
              {
                text: "Siddipet",
                link: "https://www.swiggy.com/city/siddipet",
              },
              {
                text: "Gadwal",
                link: "https://www.swiggy.com/city/gadwal",
              },
              {
                text: "Bodhan-Rural",
                link: "https://www.swiggy.com/city/bodhan-rural",
              },
              {
                text: "Kamareddy",
                link: "https://www.swiggy.com/city/kamareddy",
              },
              {
                text: "Jhunjhunu",
                link: "https://www.swiggy.com/city/jhunjhunu",
              },
              {
                text: "Kapurthala",
                link: "https://www.swiggy.com/city/kapurthala",
              },
              {
                text: "Sangrur",
                link: "https://www.swiggy.com/city/sangrur",
              },
              {
                text: "Gurdaspur",
                link: "https://www.swiggy.com/city/gurdaspur",
              },
              {
                text: "Ramgarh",
                link: "https://www.swiggy.com/city/ramgarh",
              },
              {
                text: "Bantwal",
                link: "https://www.swiggy.com/city/bantwal",
              },
              {
                text: "Doddaballapura",
                link: "https://www.swiggy.com/city/doddaballapura",
              },
              {
                text: "Buldana",
                link: "https://www.swiggy.com/city/buldana",
              },
              {
                text: "Karad",
                link: "https://www.swiggy.com/city/karad",
              },
              {
                text: "Krishnagiri",
                link: "https://www.swiggy.com/city/krishnagiri",
              },
              {
                text: "Tiptur",
                link: "https://www.swiggy.com/city/tiptur",
              },
              {
                text: "Bhadrachalam",
                link: "https://www.swiggy.com/city/bhadrachalam",
              },
              {
                text: "Mancherial",
                link: "https://www.swiggy.com/city/mancherial",
              },
              {
                text: "Balrampur",
                link: "https://www.swiggy.com/city/balrampur",
              },
              {
                text: "Bharabanki",
                link: "https://www.swiggy.com/city/bharabanki",
              },
              {
                text: "Malout",
                link: "https://www.swiggy.com/city/malout",
              },
              {
                text: "Fatehgarh Sahib",
                link: "https://www.swiggy.com/city/fatehgarh-sahib",
              },
              {
                text: "Ropar",
                link: "https://www.swiggy.com/city/ropar",
              },
              {
                text: "Nangal",
                link: "https://www.swiggy.com/city/nangal",
              },
              {
                text: "Narnaul",
                link: "https://www.swiggy.com/city/narnaul",
              },
              {
                text: "Naraingarh",
                link: "https://www.swiggy.com/city/naraingarh",
              },
              {
                text: "Himmatnagar",
                link: "https://www.swiggy.com/city/himmatnagar",
              },
              {
                text: "Dausa",
                link: "https://www.swiggy.com/city/dausa",
              },
              {
                text: "Jahanabad",
                link: "https://www.swiggy.com/city/jahanabad",
              },
              {
                text: "Samastipur",
                link: "https://www.swiggy.com/city/samastipur",
              },
              {
                text: "Purnea",
                link: "https://www.swiggy.com/city/purnea",
              },
              {
                text: "Berhampur",
                link: "https://www.swiggy.com/city/berhampur",
              },
              {
                text: "Malda",
                link: "https://www.swiggy.com/city/malda",
              },
              {
                text: "Tuni",
                link: "https://www.swiggy.com/city/tuni",
              },
              {
                text: "Puttur",
                link: "https://www.swiggy.com/city/puttur",
              },
              {
                text: "Rayachoty",
                link: "https://www.swiggy.com/city/rayachoty",
              },
              {
                text: "Nirmal",
                link: "https://www.swiggy.com/city/nirmal",
              },
              {
                text: "Mirzapur",
                link: "https://www.swiggy.com/city/mirzapur",
              },
              {
                text: "Tanuku",
                link: "https://www.swiggy.com/city/tanuku",
              },
              {
                text: "Dahod",
                link: "https://www.swiggy.com/city/dahod",
              },
              {
                text: "Barmer",
                link: "https://www.swiggy.com/city/barmer",
              },
              {
                text: "Gangapur City",
                link: "https://www.swiggy.com/city/gangapur-city",
              },
              {
                text: "Mandi Gobindgarh",
                link: "https://www.swiggy.com/city/mandi-gobindgarh",
              },
              {
                text: "Tarn Taran Sahib",
                link: "https://www.swiggy.com/city/tarn-taran-sahib",
              },
              {
                text: "Nakodar",
                link: "https://www.swiggy.com/city/nakodar",
              },
              {
                text: "Ankleshwar",
                link: "https://www.swiggy.com/city/ankleshwar",
              },
              {
                text: "Vyara",
                link: "https://www.swiggy.com/city/vyara",
              },
              {
                text: "Bardoli",
                link: "https://www.swiggy.com/city/bardoli",
              },
              {
                text: "Halol",
                link: "https://www.swiggy.com/city/halol",
              },
              {
                text: "Bijnor",
                link: "https://www.swiggy.com/city/bijnor",
              },
              {
                text: "Sangamner",
                link: "https://www.swiggy.com/city/sangamner",
              },
              {
                text: "Baramati",
                link: "https://www.swiggy.com/city/baramati",
              },
              {
                text: "Betul",
                link: "https://www.swiggy.com/city/betul",
              },
              {
                text: "Chhatarpur",
                link: "https://www.swiggy.com/city/chhatarpur",
              },
              {
                text: "Balaghat",
                link: "https://www.swiggy.com/city/balaghat",
              },
              {
                text: "Sivakasi",
                link: "https://www.swiggy.com/city/sivakasi",
              },
              {
                text: "Viluppuram",
                link: "https://www.swiggy.com/city/viluppuram",
              },
              {
                text: "Ramanathapuram",
                link: "https://www.swiggy.com/city/ramanathapuram",
              },
              {
                text: "Sirsi",
                link: "https://www.swiggy.com/city/sirsi",
              },
              {
                text: "Theni",
                link: "https://www.swiggy.com/city/theni",
              },
              {
                text: "Karur",
                link: "https://www.swiggy.com/city/karur",
              },
              {
                text: "Karwar",
                link: "https://www.swiggy.com/city/karwar",
              },
              {
                text: "Sindhanur",
                link: "https://www.swiggy.com/city/sindhanur",
              },
              {
                text: "Kannur",
                link: "https://www.swiggy.com/city/kannur",
              },
              {
                text: "Noida 1",
                link: "https://www.swiggy.com/city/noida-1",
              },
              {
                text: "Thiruvalla",
                link: "https://www.swiggy.com/city/thiruvalla",
              },
              {
                text: "Thodupuzha",
                link: "https://www.swiggy.com/city/thodupuzha",
              },
              {
                text: "Kadiri",
                link: "https://www.swiggy.com/city/kadiri",
              },
              {
                text: "Kavali",
                link: "https://www.swiggy.com/city/kavali",
              },
              {
                text: "Tezpur",
                link: "https://www.swiggy.com/city/tezpur",
              },
              {
                text: "Kayamkulam",
                link: "https://www.swiggy.com/city/kayamkulam",
              },
              {
                text: "Kottarakkara",
                link: "https://www.swiggy.com/city/kottarakkara",
              },
              {
                text: "Mandi Dabwali",
                link: "https://www.swiggy.com/city/mandi-dabwali",
              },
              {
                text: "Fatehabad",
                link: "https://www.swiggy.com/city/fatehabad",
              },
              {
                text: "Jagraon",
                link: "https://www.swiggy.com/city/jagraon",
              },
              {
                text: "Mansa",
                link: "https://www.swiggy.com/city/mansa",
              },
              {
                text: "Pinjore City",
                link: "https://www.swiggy.com/city/pinjore-city",
              },
              {
                text: "Fazilka",
                link: "https://www.swiggy.com/city/fazilka",
              },
              {
                text: "Baddi",
                link: "https://www.swiggy.com/city/baddi",
              },
              {
                text: "Solan",
                link: "https://www.swiggy.com/city/solan",
              },
              {
                text: "Daltonganj",
                link: "https://www.swiggy.com/city/daltonganj",
              },
              {
                text: "Balangir",
                link: "https://www.swiggy.com/city/balangir",
              },
              {
                text: "Kothagudem",
                link: "https://www.swiggy.com/city/kothagudem",
              },
              {
                text: "Hansi",
                link: "https://www.swiggy.com/city/hansi",
              },
              {
                text: "Aurangabad_Bihar",
                link: "https://www.swiggy.com/city/aurangabadbihar",
              },
              {
                text: "Gopalganj",
                link: "https://www.swiggy.com/city/gopalganj",
              },
              {
                text: "Jharsuguda",
                link: "https://www.swiggy.com/city/jharsuguda",
              },
              {
                text: "Tohana",
                link: "https://www.swiggy.com/city/tohana",
              },
              {
                text: "Jhalawar",
                link: "https://www.swiggy.com/city/jhalawar",
              },
              {
                text: "Sivasagar",
                link: "https://www.swiggy.com/city/sivasagar",
              },
              {
                text: "Bagdogra",
                link: "https://www.swiggy.com/city/bagdogra",
              },
              {
                text: "Kendrapada",
                link: "https://www.swiggy.com/city/kendrapada",
              },
              {
                text: "Mallapuram (Do not Use)",
                link: "https://www.swiggy.com/city/mallapuram-do-not-use",
              },
              {
                text: "Veraval",
                link: "https://www.swiggy.com/city/veraval",
              },
              {
                text: "Daman",
                link: "https://www.swiggy.com/city/daman",
              },
              {
                text: "Chiplun",
                link: "https://www.swiggy.com/city/chiplun",
              },
              {
                text: "Silvassa",
                link: "https://www.swiggy.com/city/silvassa",
              },
              {
                text: "Lonavla",
                link: "https://www.swiggy.com/city/lonavla",
              },
              {
                text: "Bongaigaon",
                link: "https://www.swiggy.com/city/bongaigaon",
              },
              {
                text: "Golaghat",
                link: "https://www.swiggy.com/city/golaghat",
              },
              {
                text: "Duliajan",
                link: "https://www.swiggy.com/city/duliajan",
              },
              {
                text: "Bolpur",
                link: "https://www.swiggy.com/city/bolpur",
              },
              {
                text: "Madhubani",
                link: "https://www.swiggy.com/city/madhubani",
              },
              {
                text: "Balasore",
                link: "https://www.swiggy.com/city/balasore",
              },
              {
                text: "Palampur",
                link: "https://www.swiggy.com/city/palampur",
              },
              {
                text: "Kotdwar",
                link: "https://www.swiggy.com/city/kotdwar",
              },
              {
                text: "Koppal",
                link: "https://www.swiggy.com/city/koppal",
              },
              {
                text: "Chikhli",
                link: "https://www.swiggy.com/city/chikhli",
              },
              {
                text: "Dahanu",
                link: "https://www.swiggy.com/city/dahanu",
              },
              {
                text: "Itanagar",
                link: "https://www.swiggy.com/city/itanagar",
              },
              {
                text: "Rangpo",
                link: "https://www.swiggy.com/city/rangpo",
              },
              {
                text: "Aizawl",
                link: "https://www.swiggy.com/city/aizawl",
              },
              {
                text: "Gangtok",
                link: "https://www.swiggy.com/city/gangtok",
              },
              {
                text: "Mayiladuthurai",
                link: "https://www.swiggy.com/city/mayiladuthurai",
              },
              {
                text: "Kannauj",
                link: "https://www.swiggy.com/city/kannauj",
              },
              {
                text: "Cooch Behar",
                link: "https://www.swiggy.com/city/cooch-behar",
              },
              {
                text: "Palani",
                link: "https://www.swiggy.com/city/palani",
              },
              {
                text: "Bilimora",
                link: "https://www.swiggy.com/city/bilimora",
              },
              {
                text: "Boisar",
                link: "https://www.swiggy.com/city/boisar",
              },
              {
                text: "Kohima",
                link: "https://www.swiggy.com/city/kohima",
              },
              {
                text: "Naharlagun",
                link: "https://www.swiggy.com/city/naharlagun",
              },
              {
                text: "Dumka",
                link: "https://www.swiggy.com/city/dumka",
              },
              {
                text: "Rajsamand",
                link: "https://www.swiggy.com/city/rajsamand",
              },
              {
                text: "Gauriganj",
                link: "https://www.swiggy.com/city/gauriganj",
              },
              {
                text: "Bodinayakanur",
                link: "https://www.swiggy.com/city/bodinayakanur",
              },
              {
                text: "Bhawanipatna",
                link: "https://www.swiggy.com/city/bhawanipatna",
              },
              {
                text: "Baran",
                link: "https://www.swiggy.com/city/baran",
              },
              {
                text: "Narsinghpur",
                link: "https://www.swiggy.com/city/narsinghpur",
              },
              {
                text: "Kovilpatti",
                link: "https://www.swiggy.com/city/kovilpatti",
              },
              {
                text: "Pusad",
                link: "https://www.swiggy.com/city/pusad",
              },
              {
                text: "Kendujhar",
                link: "https://www.swiggy.com/city/kendujhar",
              },
              {
                text: "Manali",
                link: "https://www.swiggy.com/city/manali",
              },
              {
                text: "Diu",
                link: "https://www.swiggy.com/city/diu",
              },
              {
                text: "Khamgaon",
                link: "https://www.swiggy.com/city/khamgaon",
              },
              {
                text: "Ramanagara",
                link: "https://www.swiggy.com/city/ramanagara",
              },
              {
                text: "Alipurduar",
                link: "https://www.swiggy.com/city/alipurduar",
              },
              {
                text: "Almora",
                link: "https://www.swiggy.com/city/almora",
              },
              {
                text: "Jhargram",
                link: "https://www.swiggy.com/city/jhargram",
              },
              {
                text: "Arambagh",
                link: "https://www.swiggy.com/city/arambagh",
              },
              {
                text: "Bhadohi",
                link: "https://www.swiggy.com/city/bhadohi",
              },
              {
                text: "Tenkasi",
                link: "https://www.swiggy.com/city/tenkasi",
              },
              {
                text: "Srivilliputhur",
                link: "https://www.swiggy.com/city/srivilliputhur",
              },
              {
                text: "Chidambaram",
                link: "https://www.swiggy.com/city/chidambaram",
              },
              {
                text: "Rajgarh",
                link: "https://www.swiggy.com/city/rajgarh",
              },
              {
                text: "Pratapgarh",
                link: "https://www.swiggy.com/city/pratapgarh",
              },
              {
                text: "Washim",
                link: "https://www.swiggy.com/city/washim",
              },
              {
                text: "Raghunathpur",
                link: "https://www.swiggy.com/city/raghunathpur",
              },
              {
                text: "Suri",
                link: "https://www.swiggy.com/city/suri",
              },
              {
                text: "Kadayanallur",
                link: "https://www.swiggy.com/city/kadayanallur",
              },
              {
                text: "Thiruvarur",
                link: "https://www.swiggy.com/city/thiruvarur",
              },
              {
                text: "Ranaghat-WB",
                link: "https://www.swiggy.com/city/ranaghat-wb",
              },
              {
                text: "Wayanad",
                link: "https://www.swiggy.com/city/wayanad",
              },
              {
                text: "Perambalur",
                link: "https://www.swiggy.com/city/perambalur",
              },
              {
                text: "Paramakudi",
                link: "https://www.swiggy.com/city/paramakudi",
              },
              {
                text: "Bela Pratapgarh",
                link: "https://www.swiggy.com/city/bela-pratapgarh",
              },
              {
                text: "Mahoba",
                link: "https://www.swiggy.com/city/mahoba",
              },
              {
                text: "Sitamarhi",
                link: "https://www.swiggy.com/city/sitamarhi",
              },
              {
                text: "Chakdaha",
                link: "https://www.swiggy.com/city/chakdaha",
              },
              {
                text: "Khalilabad",
                link: "https://www.swiggy.com/city/khalilabad",
              },
              {
                text: "Pattukkottai",
                link: "https://www.swiggy.com/city/pattukkottai",
              },
              {
                text: "Tindivanam",
                link: "https://www.swiggy.com/city/tindivanam",
              },
              {
                text: "Tiruttani",
                link: "https://www.swiggy.com/city/tiruttani",
              },
              {
                text: "Gangarampur",
                link: "https://www.swiggy.com/city/gangarampur",
              },
              {
                text: "Dharapuram",
                link: "https://www.swiggy.com/city/dharapuram",
              },
              {
                text: "Arakkonam",
                link: "https://www.swiggy.com/city/arakkonam",
              },
              {
                text: "Sirkali",
                link: "https://www.swiggy.com/city/sirkali",
              },
              {
                text: "Mettupalayam",
                link: "https://www.swiggy.com/city/mettupalayam",
              },
              {
                text: "Digboi",
                link: "https://www.swiggy.com/city/digboi",
              },
              {
                text: "Biswanath Chariali",
                link: "https://www.swiggy.com/city/biswanath-chariali",
              },
              {
                text: "Nalbari",
                link: "https://www.swiggy.com/city/nalbari",
              },
              {
                text: "Shirdi city",
                link: "https://www.swiggy.com/city/shirdi-city",
              },
              {
                text: "Mukerian",
                link: "https://www.swiggy.com/city/mukerian",
              },
              {
                text: "Hosur",
                link: "https://www.swiggy.com/city/hosur",
              },
              {
                text: "Palakollu",
                link: "https://www.swiggy.com/city/palakollu",
              },
              {
                text: "Ravulapalem",
                link: "https://www.swiggy.com/city/ravulapalem",
              },
              {
                text: "Barh",
                link: "https://www.swiggy.com/city/barh",
              },
              {
                text: "Palghar",
                link: "https://www.swiggy.com/city/palghar",
              },
              {
                text: "Kushalnagar",
                link: "https://www.swiggy.com/city/kushalnagar",
              },
              {
                text: "Dungarpur",
                link: "https://www.swiggy.com/city/dungarpur",
              },
              {
                text: "Chaibasa",
                link: "https://www.swiggy.com/city/chaibasa",
              },
              {
                text: "Haveri",
                link: "https://www.swiggy.com/city/haveri",
              },
              {
                text: "Karaikal",
                link: "https://www.swiggy.com/city/karaikal",
              },
              {
                text: "Jjajjar",
                link: "https://www.swiggy.com/city/jjajjar",
              },
              {
                text: "Kokrajhar",
                link: "https://www.swiggy.com/city/kokrajhar",
              },
              {
                text: "Rangia",
                link: "https://www.swiggy.com/city/rangia",
              },
              {
                text: "Hamirpur",
                link: "https://www.swiggy.com/city/hamirpur",
              },
              {
                text: "Una",
                link: "https://www.swiggy.com/city/una",
              },
              {
                text: "Sulthan Bathery",
                link: "https://www.swiggy.com/city/sulthan-bathery",
              },
              {
                text: "Rayagada",
                link: "https://www.swiggy.com/city/rayagada",
              },
              {
                text: "Paradeep",
                link: "https://www.swiggy.com/city/paradeep",
              },
              {
                text: "Mandapeta",
                link: "https://www.swiggy.com/city/mandapeta",
              },
              {
                text: "Jamui",
                link: "https://www.swiggy.com/city/jamui",
              },
              {
                text: "Pilkhuwa",
                link: "https://www.swiggy.com/city/pilkhuwa",
              },
              {
                text: "Parvathipuram",
                link: "https://www.swiggy.com/city/parvathipuram",
              },
              {
                text: "Ambajogai",
                link: "https://www.swiggy.com/city/ambajogai",
              },
              {
                text: "Araria",
                link: "https://www.swiggy.com/city/araria",
              },
              {
                text: "North Lakhimpur",
                link: "https://www.swiggy.com/city/north-lakhimpur",
              },
              {
                text: "Rajampet",
                link: "https://www.swiggy.com/city/rajampet",
              },
              {
                text: "Udumalaipettai",
                link: "https://www.swiggy.com/city/udumalaipettai",
              },
              {
                text: "Tirupattur",
                link: "https://www.swiggy.com/city/tirupattur",
              },
              {
                text: "Hojai",
                link: "https://www.swiggy.com/city/hojai",
              },
              {
                text: "Khagaria",
                link: "https://www.swiggy.com/city/khagaria",
              },
              {
                text: "Dasuya",
                link: "https://www.swiggy.com/city/dasuya",
              },
              {
                text: "Gudur",
                link: "https://www.swiggy.com/city/gudur",
              },
              {
                text: "Sullurpeta",
                link: "https://www.swiggy.com/city/sullurpeta",
              },
              {
                text: "Piler",
                link: "https://www.swiggy.com/city/piler",
              },
              {
                text: "SankaranKoil",
                link: "https://www.swiggy.com/city/sankarankoil",
              },
              {
                text: "Nabha",
                link: "https://www.swiggy.com/city/nabha",
              },
              {
                text: "LPU - Phagwara",
                link: "https://www.swiggy.com/city/lpu-phagwara",
              },
              {
                text: "Jangipur",
                link: "https://www.swiggy.com/city/jangipur",
              },
              {
                text: "Roha",
                link: "https://www.swiggy.com/city/roha",
              },
            ],
            id: "footer_content",
          },
        },
      },
      {
        card: {
          card: {
            "@type": "type.googleapis.com/swiggy.seo.widgets.v1.MetaContext",
            citySlug: "delhi",
            lat: "28.7040592",
            lng: "77.10249019999999",
            userAgent:
              "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36",
            gandalfRequest:
              '{"sortAttribute":"relevance","isFiltered":false,"queryId":"seo-data-8f46cf41-7a52-41db-841b-ac92648985b3","seoParams":{"apiName":"FoodHomePage","brandId":"","seoUrl":"www.swiggy.com","pageType":"FOOD_HOME_PAGE"}}',
            id: "meta_data",
            metaInfo: {
              pageType: "FOOD_HOME_PAGE",
              pageTitle: "Food home delivery | Swiggy",
            },
            screenType: "filteredCollection",
            seoParams: {
              apiName: "FoodHomePage",
              seoUrl: "www.swiggy.com",
              pageType: "FOOD_HOME_PAGE",
            },
          },
        },
      },
    ],
    firstOffsetRequest: true,
    cacheExpiryTime: 240,
    nextFetch: 1,
  },
  tid: "f3615737-65ed-4813-88b6-dc795ab2263e",
  sid: "9ep842ad-e60e-448e-91d9-647fb7b2ce01",
  deviceId: "9aa20636-855d-18b2-e695-37087a0f7480",
  csrfToken: "F59CC1rSoZh5-qUIeCq9kHAEJOImHXioUJ_xyLTs",
};
// End of the data

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQQ9W98Mg2_uVUCWTJY_WkT0adfjOEXCvHRQ&usqp=CAU"
        ></img>
      </div>
      <div className="nav-items">
        <ul>
          <li className="item">Home</li>
          <li className="item">About Us</li>
          <li className="item">Contact Us</li>
          <li className="item">Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestaurantCard = (swiggyData) => {
  const {
        name,
        avgRatingString,
        cuisines,
        sla,
        cloudinaryImageId } = swiggyData?.swiggyData?.info;

  return (
    <div className="res-card" style={{ backgroundColor: "white" }}>
      <img
        className="res-img"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          cloudinaryImageId
        }
        alt="res log"
      />
      <h3 className="card-name custom-font-family">{name}</h3>
      <h4 className="card-cuisines custom-font-family">{cuisines.join(" , ")}</h4>
      <h4 className="custom-font-family">{avgRatingString} star</h4>
      <h4 className="custom-font-family">{sla.deliveryTime} minutes</h4>
    </div>
  );
};
const Body = () => {
  const swiggyObj =
    swiggyData.data.cards[2]?.card?.card?.gridElements?.infoWithStyle
      ?.restaurants;
  return (
    <div className="body">
      <div className="search-bar"></div>
      <div className="resturants">
        {swiggyObj.map((swig, index) => (
          <RestaurantCard key={index} swiggyData={swig} />
        ))}
      </div>
    </div>
  );
};
const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
