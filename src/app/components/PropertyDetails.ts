const PropertyPayload = {
  intent: {
    name: "initialize_property_information",
  },
  current_property_details: JSON.stringify({
    UnitID: 4638,
    UnitNumber: "T11993",
    Name: "The Boat House",
    Neighborhood: "North Swan Beach",
    DistanceToBeach: "Oceanfront",
    ShortUrl: "https://www.twiddy.com/Dr3x9",
    StreetAddress: "1993 Sandfiddler Road",
    City: "4x4",
    State: "NC",
    Zip: "27927     ",
    FullAddress: "1993 Sandfiddler Road, 4x4, NC 27927     ",
    Is4x4: true,
    Bedrooms: "1",
    BeddingSummary:
      '<span class="text-nowrap">1 Q</span>, <span class="text-nowrap">1 T</span>',
    BathroomsTotal: "1",
    BathroomsSummary: "1 Full",
    CheckinDay: "Sunday",
    CheckinOffice: null,
    ShowParking: false,
    Parking: null,
  }),
  current_property_description:
    "The kitchen doors open to a dreamy covered porch with panoramic ocean views, perfect for enjoying a tall glass of sweet tea or afternoon cocktail.",
  current_property_ammenities: [
    "Charcoal Grill",
    "Keyless Entry",
    "No Pets Allowed",
    "No Smoking",
    "Wifi",
  ],
};

export default PropertyPayload;
