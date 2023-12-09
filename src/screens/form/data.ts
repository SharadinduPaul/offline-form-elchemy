import React from "react";
import { Tdropdown, TinputFields } from "./types";

export const genderData: Tdropdown[] = [
  { value: "Male", label: "Male" },
  { value: "Female", label: "Female" },
];
export const cities: Tdropdown[] = [
  { value: "IL", label: "Illinois" },
  { value: "IN", label: "Indiana" },
  { value: "IA", label: "Iowa" },
  { value: "KS", label: "Kansas" },
  { value: "KY", label: "Kentucky" },
  { value: "LA", label: "Louisiana" },
  { value: "ME", label: "Maine" },
  { value: "MH", label: "Marshall Islands" },
  { value: "MD", label: "Maryland" },
  { value: "MA", label: "Massachusetts" },
  { value: "MI", label: "Michigan" },
  { value: "MN", label: "Minnesota" },
  { value: "MS", label: "Mississippi" },
  { value: "MO", label: "Missouri" },
  { value: "MT", label: "Montana" },
  { value: "NE", label: "Nebraska" },
  { value: "NV", label: "Nevada" },
  { value: "NH", label: "New Hampshire" },
  { value: "SD", label: "Springdale" },
  { label: "Lagos,Cairo,Kinshasa", value: "Lagos,Cairo,Kinshasa" },
  { label: "Giza", value: "Giza" },
  { label: "Luanda", value: "Luanda" },
  { label: "Dar es Salaam", value: "Dar es Salaam" },
  { label: "Khartoum", value: "Khartoum" },
  { label: "Johannesburg", value: "Johannesburg" },
  { label: "Abidjan", value: "Abidjan" },
  { label: "Alexandria", value: "Alexandria" },
  { label: "Addis Ababa", value: "Addis Ababa" },
  { label: "Nairobi", value: "Nairobi" },
  { label: "Cape Town", value: "Cape Town" },
  { label: "Yaoundé", value: "Yaoundé" },
  { label: "Kano", value: "Kano" },
  { label: "East Rand (Ekurhuleni)", value: "East Rand (Ekurhuleni)" },
  { label: "Douala", value: "Douala" },
  { label: "Casablanca", value: "Casablanca" },
  { label: "Ibadan", value: "Ibadan" },
  { label: "Antananarivo", value: "Antananarivo" },
  { label: "Abuja", value: "Abuja" },
  { label: "Kampala", value: "Kampala" },
  { label: "Kumasi", value: "Kumasi" },
  { label: "Dakar", value: "Dakar" },
  { label: "Port Harcourt", value: "Port Harcourt" },
  { label: "Durban (eThekwini)", value: "Durban (eThekwini)" },
  { label: "Ouagadougou", value: "Ouagadougou" },
  { label: "Lusaka", value: "Lusaka" },
  { label: "Algiers", value: "Algiers" },
  { label: "Bamako", value: "Bamako" },
  { label: "Omdurman", value: "Omdurman" },
  { label: "Mbuji-Mayi", value: "Mbuji-Mayi" },
  { label: "Pretoria (Tshwane)", value: "Pretoria (Tshwane)" },
  { label: "Lubumbashi", value: "Lubumbashi" },
  { label: "Accra", value: "Accra" },
  { label: "Brazzaville", value: "Brazzaville" },
  { label: "Mogadishu", value: "Mogadishu" },
  { label: "Tunis", value: "Tunis" },
  { label: "Conakry", value: "Conakry" },
  { label: "Rabat", value: "Rabat" },
  { label: "Lomé", value: "Lomé" },
  { label: "Benin City", value: "Benin City" },
  { label: "Matola", value: "Matola" },
  { label: "Monrovia", value: "Monrovia" },
  { label: "Kananga", value: "Kananga" },
  { label: "Harare", value: "Harare" },
  { label: "Onitsha", value: "Onitsha" },
  { label: "N'Djamena", value: "N'Djamena" },
  { label: "Nouakchott", value: "Nouakchott" },
  { label: "Mombasa", value: "Mombasa" },
  { label: "Niamey", value: "Niamey" },
  { label: "Kisangani", value: "Kisangani" },
  { label: "Pointe-Noire", value: "Pointe-Noire" },
  {
    label: "Gqeberha (Port Elizabeth)",
    value: "Gqeberha (Port Elizabeth)",
  },
  { label: "Tangier", value: "Tangier" },
  { label: "Freetown", value: "Freetown" },
  { label: "Fez", value: "Fez" },
  { label: "Uyo", value: "Uyo" },
  { label: "Mwanza", value: "Mwanza" },
  { label: "Lilongwe", value: "Lilongwe" },
  { label: "Kigali", value: "Kigali" },
  { label: "Bukavu", value: "Bukavu" },
  { label: "Abomey-Calavi", value: "Abomey-Calavi" },
  { label: "Nnewi", value: "Nnewi" },
  { label: "Tripoli", value: "Tripoli" },
  { label: "Kaduna", value: "Kaduna" },
  { label: "Aba", value: "Aba" },
  { label: "Bujumbura", value: "Bujumbura" },
  { label: "Maputo", value: "Maputo" },
  { label: "Hargeisa", value: "Hargeisa" },
  { label: "Bobo Dioulasso", value: "Bobo Dioulasso" },
  { label: "Shubra el-Kheima", value: "Shubra el-Kheima" },
  { label: "Ikorodu", value: "Ikorodu" },
  { label: "Asmara", value: "Asmara" },
  { label: "Marrakesh", value: "Marrakesh" },
  { label: "Tshikapa", value: "Tshikapa" },
  { label: "Nyala", value: "Nyala" },
  { label: "Ilorin", value: "Ilorin" },
  { label: "Blantyre", value: "Blantyre" },
  { label: "Agadir", value: "Agadir" },
  { label: "Misratah", value: "Misratah" },
  { label: "Owerri", value: "Owerri" },
  { label: "Warri", value: "Warri" },
  { label: "Jos", value: "Jos" },
  { label: "Bangui", value: "Bangui" },
  { label: "Nampula", value: "Nampula" },
  { label: "Oran", value: "Oran" },
  { label: "West Rand", value: "West Rand" },
  { label: "Lubango", value: "Lubango" },
  { label: "Cabinda", value: "Cabinda" },
  { label: "Umuahia", value: "Umuahia" },
  { label: "Libreville", value: "Libreville" },
  { label: "Benghazi", value: "Benghazi" },
  { label: "Maiduguri", value: "Maiduguri" },
  { label: "Enugu", value: "Enugu" },
  { label: "Lokoja", value: "Lokoja" },
  { label: "Vereeniging (Emfuleni)", value: "Vereeniging (Emfuleni)" },
  { label: "Benguela", value: "Benguela" },
  { label: "Bunia", value: "Bunia" },
  { label: "Zanzibar", value: "Zanzibar" },
  { label: "São Paulo", value: "São Paulo" },
  { label: "Mumbai", value: "Mumbai" },
  { label: "Delhi", value: "Delhi" },
  { label: "Bangalore", value: "Bangalore" },
  { label: "Hyderabad", value: "Hyderabad" },
  { label: "Ahmedabad", value: "Ahmedabad" },
  { label: "Chennai", value: "Chennai" },
  { label: "Kolkata", value: "Kolkata" },
  { label: "Surat", value: "Surat" },
  { label: "Pune", value: "Pune" },
  { label: "Jaipur", value: "Jaipur" },
  { label: "Lucknow", value: "Lucknow" },
  { label: "Kanpur", value: "Kanpur" },
  { label: "Nagpur", value: "Nagpur" },
  { label: "Indore", value: "Indore" },
  { label: "Thane", value: "Thane" },
  { label: "Bhopal", value: "Bhopal" },
  { label: "Visakhapatnam", value: "Visakhapatnam" },
  { label: "Pimpri-Chinchwad", value: "Pimpri-Chinchwad" },
  { label: "Patna", value: "Patna" },
  { label: "Vadodara", value: "Vadodara" },
  { label: "Ghaziabad", value: "Ghaziabad" },
  { label: "Ludhiana", value: "Ludhiana" },
  { label: "Agra", value: "Agra" },
  { label: "Nashik", value: "Nashik" },
  { label: "Faridabad", value: "Faridabad" },
  { label: "Meerut", value: "Meerut" },
  { label: "Rajkot", value: "Rajkot" },
  { label: "Kalyan-Dombivali", value: "Kalyan-Dombivali" },
  { label: "Vasai-Virar", value: "Vasai-Virar" },
  { label: "Varanasi", value: "Varanasi" },
  { label: "Srinagar", value: "Srinagar" },
  { label: "Aurangabad", value: "Aurangabad" },
  { label: "Dhanbad", value: "Dhanbad" },
  { label: "Amritsar", value: "Amritsar" },
  { label: "Navi Mumbai", value: "Navi Mumbai" },
  { label: "Allahabad", value: "Allahabad" },
  { label: "Howrah", value: "Howrah" },
  { label: "Ranchi", value: "Ranchi" },
  { label: "Jabalpur", value: "Jabalpur" },
  { label: "Gwalior", value: "Gwalior" },
  { label: "Coimbatore", value: "Coimbatore" },
  { label: "Vijayawada", value: "Vijayawada" },
  { label: "Jodhpur", value: "Jodhpur" },
  { label: "Madurai", value: "Madurai" },
  { label: "Raipur", value: "Raipur" },
  { label: "Kota", value: "Kota" },
  { label: "Guwahati", value: "Guwahati" },
  { label: "Chandigarh", value: "Chandigarh" },
  { label: "Thiruvananthapuram", value: "Thiruvananthapuram" },
  { label: "Solapur", value: "Solapur" },
  { label: "Hubballi-Dharwad", value: "Hubballi-Dharwad" },
  { label: "Tiruchirappalli[6]", value: "Tiruchirappalli[6]" },
  { label: "Tiruppur", value: "Tiruppur" },
  { label: "Moradabad", value: "Moradabad" },
  { label: "Mysore", value: "Mysore" },
  { label: "Bareily", value: "Bareily" },
  { label: "Gurgaon", value: "Gurgaon" },
  { label: "Aligarh", value: "Aligarh" },
  { label: "Jalandhar", value: "Jalandhar" },
  { label: "Bhubaneswar", value: "Bhubaneswar" },
  { label: "Salem", value: "Salem" },
  { label: "Mira-Bhayandar", value: "Mira-Bhayandar" },
  { label: "Warangal", value: "Warangal" },
  { label: "Guntur", value: "Guntur" },
  { label: "Bhiwandi", value: "Bhiwandi" },
  { label: "Saharanpur", value: "Saharanpur" },
  { label: "Gorakhpur", value: "Gorakhpur" },
  { label: "Bikaner", value: "Bikaner" },
  { label: "Amravati", value: "Amravati" },
  { label: "Noida", value: "Noida" },
  { label: "Jamshedpur", value: "Jamshedpur" },
  { label: "Bhilai", value: "Bhilai" },
  { label: "Cuttack", value: "Cuttack" },
  { label: "Firozabad", value: "Firozabad" },
  { label: "Kochi", value: "Kochi" },
  { label: "Nellore", value: "Nellore" },
  { label: "Bhavnagar", value: "Bhavnagar" },
  { label: "Dehradun", value: "Dehradun" },
  { label: "Durgapur", value: "Durgapur" },
  { label: "Asansol", value: "Asansol" },
  { label: "Rourkela", value: "Rourkela" },
  { label: "Nanded", value: "Nanded" },
  { label: "Kolhapur", value: "Kolhapur" },
  { label: "Ajmer", value: "Ajmer" },
  { label: "Akola", value: "Akola" },
  { label: "Gulbarga", value: "Gulbarga" },
  { label: "Jamnagar", value: "Jamnagar" },
  { label: "Ujjain", value: "Ujjain" },
  { label: "Loni", value: "Loni" },
  { label: "Siliguri", value: "Siliguri" },
  { label: "Jhansi", value: "Jhansi" },
  { label: "Ulhasnagar", value: "Ulhasnagar" },
  { label: "Jammu", value: "Jammu" },
  { label: "Sangli-Miraj & Kupwad", value: "Sangli-Miraj & Kupwad" },
  { label: "Mangalore", value: "Mangalore" },
  { label: "Erode", value: "Erode" },
  { label: "Belgaum", value: "Belgaum" },
  { label: "Ambattur", value: "Ambattur" },
  { label: "Tirunelveli", value: "Tirunelveli" },
];

export const states: Tdropdown[] = [
  { value: "AL", label: "Alabama" },
  { value: "AK", label: "Alaska" },
  { value: "AS", label: "American Samoa" },
  { value: "AZ", label: "Arizona" },
  { value: "AR", label: "Arkansas" },
  { value: "CA", label: "California" },
  { value: "CO", label: "Colorado" },
  { value: "CT", label: "Connecticut" },
  { value: "DE", label: "Delaware" },
  { value: "DC", label: "District Of Columbia" },
  { value: "FM", label: "Federated States Of Micronesia" },
  { value: "FL", label: "Florida" },
  { value: "GA", label: "Georgia" },
  { value: "GU", label: "Guam" },
  { value: "HI", label: "Hawaii" },
  { value: "ID", label: "Idaho" },
  { value: "IL", label: "Illinois" },
  { value: "IN", label: "Indiana" },
  { value: "IA", label: "Iowa" },
  { value: "KS", label: "Kansas" },
  { value: "KY", label: "Kentucky" },
  { value: "LA", label: "Louisiana" },
  { value: "ME", label: "Maine" },
  { value: "MH", label: "Marshall Islands" },
  { value: "MD", label: "Maryland" },
  { value: "MA", label: "Massachusetts" },
  { value: "MI", label: "Michigan" },
  { value: "MN", label: "Minnesota" },
  { value: "MS", label: "Mississippi" },
  { value: "MO", label: "Missouri" },
  { value: "MT", label: "Montana" },
  { value: "NE", label: "Nebraska" },
  { value: "NV", label: "Nevada" },
  { value: "NH", label: "New Hampshire" },
  { value: "NJ", label: "New Jersey" },
  { value: "NM", label: "New Mexico" },
  { value: "NY", label: "New York" },
  { value: "NC", label: "North Carolina" },
  { value: "ND", label: "North Dakota" },
  { value: "MP", label: "Northern Mariana Islands" },
  { value: "OH", label: "Ohio" },
  { value: "OK", label: "Oklahoma" },
  { value: "OR", label: "Oregon" },
  { value: "PW", label: "Palau" },
  { value: "PA", label: "Pennsylvania" },
  { value: "PR", label: "Puerto Rico" },
  { value: "RI", label: "Rhode Island" },
  { value: "SC", label: "South Carolina" },
  { value: "SD", label: "South Dakota" },
  { value: "TN", label: "Tennessee" },
  { value: "TX", label: "Texas" },
  { value: "UT", label: "Utah" },
  { value: "VT", label: "Vermont" },
  { value: "VI", label: "Virgin Islands" },
  { value: "VA", label: "Virginia" },
  { value: "WA", label: "Washington" },
  { value: "WF", label: "West Forest" },
  { value: "WV", label: "West Virginia" },
  { value: "WI", label: "Wisconsin" },
  { value: "WY", label: "Wyoming" },
  {
    label: "Andaman and Nicobar Islands",
    value: "Andaman and Nicobar Islands",
  },
  { label: "Andhra Pradesh", value: "Andhra Pradesh" },
  { label: "Arunachal Pradesh", value: "Arunachal Pradesh" },
  { label: "Assam", value: "Assam" },
  { label: "Bihar", value: "Bihar" },
  { label: "Chandigarh", value: "Chandigarh" },
  { label: "Chhattisgarh", value: "Chhattisgarh" },
  {
    label: "Dadra and Nagar Haveli and Daman and Diu",
    value: "Dadra and Nagar Haveli and Daman and Diu",
  },
  { label: "Goa", value: "Goa" },
  { label: "Gujarat", value: "Gujarat" },
  { label: "Haryana", value: "Haryana" },
  { label: "Himachal Pradesh", value: "Himachal Pradesh" },
  { label: "Jammu and Kashmir", value: "Jammu and Kashmir" },
  { label: "Jharkhand", value: "Jharkhand" },
  { label: "Karnataka", value: "Karnataka" },
  { label: "Kerela", value: "Kerela" },
  { label: "Ladakh", value: "Ladakh" },
  { label: "Lakshadweep", value: "Lakshadweep" },
  { label: "Madhya Pradesh", value: "Madhya Pradesh" },
  { label: "Maharashtra", value: "Maharashtra" },
  { label: "Manipur", value: "Manipur" },
  { label: "Meghalaya", value: "Meghalaya" },
  { label: "Mizoram", value: "Mizoram" },
  { label: "Nagaland", value: "Nagaland" },
  { label: "NCT of Delhi", value: "NCT of Delhi" },
  { label: "Odisha", value: "Odisha" },
  { label: "Puducherry", value: "Puducherry" },
  { label: "Punjab", value: "Punjab" },
  { label: "Rajasthan", value: "Rajasthan" },
  { label: "Sikkim", value: "Sikkim" },
  { label: "Tamil Nadu", value: "Tamil Nadu" },
  { label: "Telangana", value: "Telangana" },
  { label: "Tripura", value: "Tripura" },
  { label: "Uttarakhand", value: "Uttarakhand" },
  { label: "Uttar Pradesh", value: "Uttar Pradesh" },
  { label: "West Bengal", value: "West Bengal" },
];

export const countries: Tdropdown[] = [
  {
    value: "AD",
    label: "Andorra",
  },
  {
    value: "AE",
    label: "United Arab Emirates",
  },
  {
    value: "AF",
    label: "Afghanistan",
  },
  {
    value: "AG",
    label: "Antigua and Barbuda",
  },
  {
    value: "AI",
    label: "Anguilla",
  },
  {
    value: "AL",
    label: "Albania",
  },
  {
    value: "AM",
    label: "Armenia",
  },
  {
    value: "AN",
    label: "Netherlands Antilles",
  },
  {
    value: "AO",
    label: "Angola",
  },
  {
    value: "AQ",
    label: "Antarctica",
  },
  {
    value: "AR",
    label: "Argentina",
  },
  {
    value: "AS",
    label: "American Samoa",
  },
  {
    value: "AT",
    label: "Austria",
  },
  {
    value: "AU",
    label: "Australia",
  },
  {
    value: "AW",
    label: "Aruba",
  },
  {
    value: "AZ",
    label: "Azerbaijan",
  },
  {
    value: "BA",
    label: "Bosnia and Herzegovina",
  },
  {
    value: "BB",
    label: "Barbados",
  },
  {
    value: "BD",
    label: "Bangladesh",
  },
  {
    value: "BE",
    label: "Belgium",
  },
  {
    value: "BF",
    label: "Burkina Faso",
  },
  {
    value: "BG",
    label: "Bulgaria",
  },
  {
    value: "BH",
    label: "Bahrain",
  },
  {
    value: "BI",
    label: "Burundi",
  },
  {
    value: "BJ",
    label: "Benin",
  },
  {
    value: "BM",
    label: "Bermuda",
  },
  {
    value: "BN",
    label: "Brunei Darussalam",
  },
  {
    value: "BO",
    label: "Bolivia",
  },
  {
    value: "BR",
    label: "Brazil",
  },
  {
    value: "BS",
    label: "Bahama",
  },
  {
    value: "BT",
    label: "Bhutan",
  },
  {
    value: "BV",
    label: "Bouvet Island",
  },
  {
    value: "BW",
    label: "Botswana",
  },
  {
    value: "BY",
    label: "Belarus",
  },
  {
    value: "BZ",
    label: "Belize",
  },
  {
    value: "CA",
    label: "Canada",
  },
  {
    value: "CC",
    label: "Cocos Islands",
  },
  {
    value: "CF",
    label: "Central African Republic",
  },
  {
    value: "CG",
    label: "Congo",
  },
  {
    value: "CH",
    label: "Switzerland",
  },
  {
    value: "CI",
    label: "Ivory Coast",
  },
  {
    value: "CK",
    label: "Cook Iislands",
  },
  {
    value: "CL",
    label: "Chile",
  },
  {
    value: "CM",
    label: "Cameroon",
  },
  {
    value: "CN",
    label: "China",
  },
  {
    value: "CO",
    label: "Colombia",
  },
  {
    value: "CR",
    label: "Costa Rica",
  },
  {
    value: "CU",
    label: "Cuba",
  },
  {
    value: "CV",
    label: "Cape Verde",
  },
  {
    value: "CX",
    label: "Christmas Island",
  },
  {
    value: "CY",
    label: "Cyprus",
  },
  {
    value: "CZ",
    label: "Czech Republic",
  },
  {
    value: "DE",
    label: "Germany",
  },
  {
    value: "DJ",
    label: "Djibouti",
  },
  {
    value: "DK",
    label: "Denmark",
  },
  {
    value: "DM",
    label: "Dominica",
  },
  {
    value: "DO",
    label: "Dominican Republic",
  },
  {
    value: "DZ",
    label: "Algeria",
  },
  {
    value: "EC",
    label: "Ecuador",
  },
  {
    value: "EE",
    label: "Estonia",
  },
  {
    value: "EG",
    label: "Egypt",
  },
  {
    value: "EH",
    label: "Western Sahara",
  },
  {
    value: "ER",
    label: "Eritrea",
  },
  {
    value: "ES",
    label: "Spain",
  },
  {
    value: "ET",
    label: "Ethiopia",
  },
  {
    value: "FI",
    label: "Finland",
  },
  {
    value: "FJ",
    label: "Fiji",
  },
  {
    value: "FK",
    label: "Falkland Islands",
  },
  {
    value: "FM",
    label: "Micronesia",
  },
  {
    value: "FO",
    label: "Faroe Islands",
  },
  {
    value: "FR",
    label: "France",
  },
  {
    value: "FX",
    label: "France, Metropolitan",
  },
  {
    value: "GA",
    label: "Gabon",
  },
  {
    value: "GB",
    label: "United Kingdom",
  },
  {
    value: "GD",
    label: "Grenada",
  },
  {
    value: "GE",
    label: "Georgia",
  },
  {
    value: "GF",
    label: "French Guiana",
  },
  {
    value: "GH",
    label: "Ghana",
  },
  {
    value: "GI",
    label: "Gibraltar",
  },
  {
    value: "GL",
    label: "Greenland",
  },
  {
    value: "GM",
    label: "Gambia",
  },
  {
    value: "GN",
    label: "Guinea",
  },
  {
    value: "GP",
    label: "Guadeloupe",
  },
  {
    value: "GQ",
    label: "Equatorial Guinea",
  },
  {
    value: "GR",
    label: "Greece",
  },
  {
    value: "GS",
    label: "South Georgia and the South Sandwich Islands",
  },
  {
    value: "GT",
    label: "Guatemala",
  },
  {
    value: "GU",
    label: "Guam",
  },
  {
    value: "GW",
    label: "Guinea-Bissau",
  },
  {
    value: "GY",
    label: "Guyana",
  },
  {
    value: "HK",
    label: "Hong Kong",
  },
  {
    value: "HM",
    label: "Heard & McDonald Islands",
  },
  {
    value: "HN",
    label: "Honduras",
  },
  {
    value: "HR",
    label: "Croatia",
  },
  {
    value: "HT",
    label: "Haiti",
  },
  {
    value: "HU",
    label: "Hungary",
  },
  {
    value: "ID",
    label: "Indonesia",
  },
  {
    value: "IE",
    label: "Ireland",
  },
  {
    value: "IL",
    label: "Israel",
  },
  {
    value: "IN",
    label: "India",
  },
  {
    value: "IO",
    label: "British Indian Ocean Territory",
  },
  {
    value: "IQ",
    label: "Iraq",
  },
  {
    value: "IR",
    label: "Islamic Republic of Iran",
  },
  {
    value: "IS",
    label: "Iceland",
  },
  {
    value: "IT",
    label: "Italy",
  },
  {
    value: "JM",
    label: "Jamaica",
  },
  {
    value: "JO",
    label: "Jordan",
  },
  {
    value: "JP",
    label: "Japan",
  },
  {
    value: "KE",
    label: "Kenya",
  },
  {
    value: "KG",
    label: "Kyrgyzstan",
  },
  {
    value: "KH",
    label: "Cambodia",
  },
  {
    value: "KI",
    label: "Kiribati",
  },
  {
    value: "KM",
    label: "Comoros",
  },
  {
    value: "KN",
    label: "St. Kitts and Nevis",
  },
  {
    value: "KP",
    label: "Korea, Democratic People's Republic of",
  },
  {
    value: "KR",
    label: "Korea, Republic of",
  },
  {
    value: "KW",
    label: "Kuwait",
  },
  {
    value: "KY",
    label: "Cayman Islands",
  },
  {
    value: "KZ",
    label: "Kazakhstan",
  },
  {
    value: "LA",
    label: "Lao People's Democratic Republic",
  },
  {
    value: "LB",
    label: "Lebanon",
  },
  {
    value: "LC",
    label: "Saint Lucia",
  },
  {
    value: "LI",
    label: "Liechtenstein",
  },
  {
    value: "LK",
    label: "Sri Lanka",
  },
  {
    value: "LR",
    label: "Liberia",
  },
  {
    value: "LS",
    label: "Lesotho",
  },
  {
    value: "LT",
    label: "Lithuania",
  },
  {
    value: "LU",
    label: "Luxembourg",
  },
  {
    value: "LV",
    label: "Latvia",
  },
  {
    value: "LY",
    label: "Libyan Arab Jamahiriya",
  },
  {
    value: "MA",
    label: "Morocco",
  },
  {
    value: "MC",
    label: "Monaco",
  },
  {
    value: "MD",
    label: "Moldova, Republic of",
  },
  {
    value: "MG",
    label: "Madagascar",
  },
  {
    value: "MH",
    label: "Marshall Islands",
  },
  {
    value: "ML",
    label: "Mali",
  },
  {
    value: "MN",
    label: "Mongolia",
  },
  {
    value: "MM",
    label: "Myanmar",
  },
  {
    value: "MO",
    label: "Macau",
  },
  {
    value: "MP",
    label: "Northern Mariana Islands",
  },
  {
    value: "MQ",
    label: "Martinique",
  },
  {
    value: "MR",
    label: "Mauritania",
  },
  {
    value: "MS",
    label: "Monserrat",
  },
  {
    value: "MT",
    label: "Malta",
  },
  {
    value: "MU",
    label: "Mauritius",
  },
  {
    value: "MV",
    label: "Maldives",
  },
  {
    value: "MW",
    label: "Malawi",
  },
  {
    value: "MX",
    label: "Mexico",
  },
  {
    value: "MY",
    label: "Malaysia",
  },
  {
    value: "MZ",
    label: "Mozambique",
  },
  {
    value: "NA",
    label: "Namibia",
  },
  {
    value: "NC",
    label: "New Caledonia",
  },
  {
    value: "NE",
    label: "Niger",
  },
  {
    value: "NF",
    label: "Norfolk Island",
  },
  {
    value: "NG",
    label: "Nigeria",
  },
  {
    value: "NI",
    label: "Nicaragua",
  },
  {
    value: "NL",
    label: "Netherlands",
  },
  {
    value: "NO",
    label: "Norway",
  },
  {
    value: "NP",
    label: "Nepal",
  },
  {
    value: "NR",
    label: "Nauru",
  },
  {
    value: "NU",
    label: "Niue",
  },
  {
    value: "NZ",
    label: "New Zealand",
  },
  {
    value: "OM",
    label: "Oman",
  },
  {
    value: "PA",
    label: "Panama",
  },
  {
    value: "PE",
    label: "Peru",
  },
  {
    value: "PF",
    label: "French Polynesia",
  },
  {
    value: "PG",
    label: "Papua New Guinea",
  },
  {
    value: "PH",
    label: "Philippines",
  },
  {
    value: "PK",
    label: "Pakistan",
  },
  {
    value: "PL",
    label: "Poland",
  },
  {
    value: "PM",
    label: "St. Pierre & Miquelon",
  },
  {
    value: "PN",
    label: "Pitcairn",
  },
  {
    value: "PR",
    label: "Puerto Rico",
  },
  {
    value: "PT",
    label: "Portugal",
  },
  {
    value: "PW",
    label: "Palau",
  },
  {
    value: "PY",
    label: "Paraguay",
  },
  {
    value: "QA",
    label: "Qatar",
  },
  {
    value: "RE",
    label: "Reunion",
  },
  {
    value: "RO",
    label: "Romania",
  },
  {
    value: "RU",
    label: "Russian Federation",
  },
  {
    value: "RW",
    label: "Rwanda",
  },
  {
    value: "SA",
    label: "Saudi Arabia",
  },
  {
    value: "SB",
    label: "Solomon Islands",
  },
  {
    value: "SC",
    label: "Seychelles",
  },
  {
    value: "SD",
    label: "Sudan",
  },
  {
    value: "SE",
    label: "Sweden",
  },
  {
    value: "SG",
    label: "Singapore",
  },
  {
    value: "SH",
    label: "St. Helena",
  },
  {
    value: "SI",
    label: "Slovenia",
  },
  {
    value: "SJ",
    label: "Svalbard & Jan Mayen Islands",
  },
  {
    value: "SK",
    label: "Slovakia",
  },
  {
    value: "SL",
    label: "Sierra Leone",
  },
  {
    value: "SM",
    label: "San Marino",
  },
  {
    value: "SN",
    label: "Senegal",
  },
  {
    value: "SO",
    label: "Somalia",
  },
  {
    value: "SR",
    label: "Suriname",
  },
  {
    value: "ST",
    label: "Sao Tome & Principe",
  },
  {
    value: "SV",
    label: "El Salvador",
  },
  {
    value: "SY",
    label: "Syrian Arab Republic",
  },
  {
    value: "SZ",
    label: "Swaziland",
  },
  {
    value: "TC",
    label: "Turks & Caicos Islands",
  },
  {
    value: "TD",
    label: "Chad",
  },
  {
    value: "TF",
    label: "French Southern Territories",
  },
  {
    value: "TG",
    label: "Togo",
  },
  {
    value: "TH",
    label: "Thailand",
  },
  {
    value: "TJ",
    label: "Tajikistan",
  },
  {
    value: "TK",
    label: "Tokelau",
  },
  {
    value: "TM",
    label: "Turkmenistan",
  },
  {
    value: "TN",
    label: "Tunisia",
  },
  {
    value: "TO",
    label: "Tonga",
  },
  {
    value: "TP",
    label: "East Timor",
  },
  {
    value: "TR",
    label: "Turkey",
  },
  {
    value: "TT",
    label: "Trinidad & Tobago",
  },
  {
    value: "TV",
    label: "Tuvalu",
  },
  {
    value: "TW",
    label: "Taiwan, Province of China",
  },
  {
    value: "TZ",
    label: "Tanzania, United Republic of",
  },
  {
    value: "UA",
    label: "Ukraine",
  },
  {
    value: "UG",
    label: "Uganda",
  },
  {
    value: "UM",
    label: "United States Minor Outlying Islands",
  },
  {
    value: "US",
    label: "United States of America",
  },
  {
    value: "UY",
    label: "Uruguay",
  },
  {
    value: "UZ",
    label: "Uzbekistan",
  },
  {
    value: "VA",
    label: "Vatican City State",
  },
  {
    value: "VC",
    label: "St. Vincent & the Grenadines",
  },
  {
    value: "VE",
    label: "Venezuela",
  },
  {
    value: "VG",
    label: "British Virgin Islands",
  },
  {
    value: "VI",
    label: "United States Virgin Islands",
  },
  {
    value: "VN",
    label: "Viet Nam",
  },
  {
    value: "VU",
    label: "Vanuatu",
  },
  {
    value: "WF",
    label: "Wallis & Futuna Islands",
  },
  {
    value: "WS",
    label: "Samoa",
  },
  {
    value: "YE",
    label: "Yemen",
  },
  {
    value: "YT",
    label: "Mayotte",
  },
  {
    value: "YU",
    label: "Yugoslavia",
  },
  {
    value: "ZA",
    label: "South Africa",
  },
  {
    value: "ZM",
    label: "Zambia",
  },
  {
    value: "ZR",
    label: "Zaire",
  },
  {
    value: "ZW",
    label: "Zimbabwe",
  },
  {
    value: "ZZ",
    label: "Unknown or unspecified country",
  },
];

export const form1Fields: TinputFields[] = [
  "FIRST_NAME",
  "LAST_NAME",
  "MIDDLE_NAME",
  "AGE",
  "GENDER",
  "PHONE",
  "EMAIL",
  "WORK_EMAIL",
  "ADDRESS_LINE_1",
  "ADDRESS_LINE_2",
  "CITY",
  "STATE",
  "COUNTRY",
  "PINCODE",
];
export const form2Fields: TinputFields[] = [
  "TECHNICAL_SKILLS",
  "VERBAL_SPOKEN",
  "EXPERIENCE",
  "EDUCATION",
  "GITHUB_LINK",
];
// export const
export type TExtendedDataType = {
  [x in TinputFields]?: {
    fieldName?: string;
    fieldType?: React.HTMLInputTypeAttribute | "dropdown" | "textarea";
    required?: boolean;
    dropdown?: Tdropdown[];
    children?: TExtendedDataType;
  };
};
export const formExtendedData: TExtendedDataType = {
  FIRST_NAME: {
    fieldName: "First Name",
    required: true,
  },
  MIDDLE_NAME: {
    fieldName: "Middle Name",
  },
  LAST_NAME: {
    fieldName: "Last Name",
    required: true,
  },
  AGE: {
    fieldName: "Age",
    fieldType: "number",
    required: true,
  },
  GENDER: {
    fieldName: "Gender",
    fieldType: "dropdown",
    dropdown: genderData,
    required: true,
  },
  PHONE: {
    fieldName: "Phone",
    fieldType: "number",
    required: true,
  },
  EMAIL: {
    fieldName: "Email",
    required: true,
  },
  WORK_EMAIL: {
    fieldName: "Work Email",
  },
  ADDRESS_LINE_1: {
    fieldName: "Address line 1",
    fieldType: "textarea",
    required: true,
  },
  ADDRESS_LINE_2: {
    fieldName: "Address line 2",
    fieldType: "textarea",
  },
  CITY: {
    fieldName: "City",
    fieldType: "dropdown",
    dropdown: cities,
    required: true,
  },
  STATE: {
    fieldName: "State",
    fieldType: "dropdown",
    dropdown: states,
  },
  COUNTRY: {
    fieldName: "Country",
    fieldType: "dropdown",
    dropdown: countries,
    required: true,
  },
  PINCODE: {
    fieldName: "Pin Code",
    fieldType: "number",
    required: true,
  },
};
export const formExtendedData2: TExtendedDataType = {
  TECHNICAL_SKILLS: {
    fieldName: "Technical Skills",
    required: true,
  },
  VERBAL_SPOKEN: {
    fieldName: "Verbal languages spoken",
  },
  EXPERIENCE: {
    fieldName: "Experience",
    fieldType: "textarea",
    required: true,
  },
  EDUCATION: {
    fieldName: "Education",
    fieldType: "textarea",
    required: true,
  },
  GITHUB_LINK: {
    fieldName: "Github link",
  },
};
