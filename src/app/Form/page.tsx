'use client'

import { useState } from "react";


interface Place {
  name: string;
  price: number;
}


const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    members: 1,
    cnic: "",
    account: "",
    selectedPlaces: [] as string[],
    totalPrice: 0,
  });


  // Define place options and prices
  const places = [
    { name: "Fairy Meadows", price: 4000 },
    { name: "Lahore", price: 3000 },
    { name: "Taxila", price: 3000 },
    { name: "The Karakoram Highway", price: 4000 },
    { name: "Karimabad", price: 2000 },
    { name: "Rohtas Fort", price: 3000 },
    { name: "Khewra Salt Mines", price: 3000 },
    { name: "Neelum Valley", price: 2000 },
    { name: "Rawat Fort", price: 3000 },
    { name: "Skardu", price: 4000 },
    { name: "Shogran Valley", price: 3000 },
    { name: "Hunza Valley", price: 4000 },
  ];

  // Update form data for input changes
  const handleChange = (e : any) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle place selection and calculate total price
  const handlePlaceSelection = (place: any) =>  {
    setFormData((prevData) => {
      const isSelected = prevData.selectedPlaces.includes(place.name);
      const updatedPlaces = isSelected
        ? prevData.selectedPlaces.filter((p) => p !== place.name)
        : [...prevData.selectedPlaces, place.name];
      
      // Calculate price per member
      const totalPrice = updatedPlaces.reduce((sum, placeName) => {
        const selectedPlace = places.find((p) => p.name === placeName);
        return sum + (selectedPlace ? selectedPlace.price : 0);
      }, 0) * prevData.members;

      return {
        ...prevData,
        selectedPlaces: updatedPlaces,
        totalPrice,
      };
    });
  };

  // Update total price when members count changes
  const handleMembersChange = (e : any) => {
    const members = parseInt(e.target.value) || 1;
    setFormData((prevData) => {
      const totalPrice = prevData.selectedPlaces.reduce((sum, placeName) => {
        const selectedPlace = places.find((p) => p.name === placeName);
        return sum + (selectedPlace ? selectedPlace.price : 0);
      }, 0) * members;
      return {
        ...prevData,
        members,
        totalPrice,
      };
    });
  };

  return (
    <form className="p-6 bg-gray-100 rounded-lg shadow-md max-w-md mx-auto space-y-4">
      <h2 className="text-xl font-bold text-center">Tour Booking Form</h2>

      {/* Name Field */}
      <div>
        <label className="block text-sm font-medium">Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full mt-1 p-2 border rounded-md"
        />
      </div>

      {/* Age Field */}
      <div>
        <label className="block text-sm font-medium">Age</label>
        <input
          type="number"
          name="age"
          value={formData.age}
          onChange={handleChange}
          className="w-full mt-1 p-2 border rounded-md"
        />
      </div>

      {/* Members Field */}
      <div>
        <label className="block text-sm font-medium">Members</label>
        <input
          type="number"
          name="members"
          value={formData.members}
          onChange={handleMembersChange}
          className="w-full mt-1 p-2 border rounded-md"
        />
      </div>

      {/* CNIC Field */}
      <div>
        <label className="block text-sm font-medium">CNIC No</label>
        <input
          type="text"
          name="cnic"
          value={formData.cnic}
          onChange={handleChange}
          className="w-full mt-1 p-2 border rounded-md"
        />
      </div>

      {/* Account No Field */}
      <div>
        <label className="block text-sm font-medium">Account No</label>
        <input
          type="text"
          name="account"
          value={formData.account}
          onChange={handleChange}
          className="w-full mt-1 p-2 border rounded-md"
        />
      </div>

      {/* Select Places */}
      <div>
        <label className="block text-sm font-medium">Select Places</label>
        <div className="space-y-2 mt-1">
          {places.map((place) => (
            <div key={place.name} className="flex items-center">
              <input
                type="checkbox"
                checked={formData.selectedPlaces.includes(place.name)}
                onChange={() => handlePlaceSelection(place)}
                className="mr-2"
              />
              <span className="font-medium">{place.name} - Rs. {place.price}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Total Price */}
      <div className="mt-4">
        <p className="text-lg font-semibold">
          Total Price (for {formData.members} members): Rs. {formData.totalPrice}
        </p>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full py-2 mt-4 bg-blue-600 text-white font-bold rounded-lg"
      >
        Submit
      </button>
    </form>
  );
};

export default BookingForm;