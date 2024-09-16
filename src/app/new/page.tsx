"use client";
import Image from "next/image";
import React, { useState, ChangeEvent, FormEvent } from "react";

interface FormData {
  companyName: string;
  phoneNumber: string;
  email: string;
  supportType: string;
  supportRequest: string;
}

const SupportPortal: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    companyName: "",
    phoneNumber: "",
    email: "",
    supportType: "",
    supportRequest: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Simulate email sending
    alert(`Support request submitted:\n
      Company Name: ${formData.companyName}\n
      Phone Number: ${formData.phoneNumber}\n
      Email: ${formData.email}\n
      Support Type: ${formData.supportType}\n
      Support Request: ${formData.supportRequest}\n\n
      An email has been sent to the senior engineer.`);

    // Reset the form
    setFormData({
      companyName: "",
      phoneNumber: "",
      email: "",
      supportType: "",
      supportRequest: "",
    });
  };

  return (
    <div className="-mr-[500px]">
      <h1 className="text-6xl md:text-8xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-green-400 to-yellow-400 tracking-wide mt-[100px] mb-[100px] ">
        Шинэ санаа
      </h1>

      <div className="max-w-4xl mx-auto p-6 bg-gray-100 rounded-lg shadow-md">
        <div className="flex items-center mb-[20px]">
          {" "}
          <div>
            <Image src={"/images.png"} width={100} height={0} alt="asd" />
          </div>
          <h1 className="text-2xl font-bold ml-[70px] text-center ">
            ITZone Support Portal
          </h1>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="form-group">
            <label
              htmlFor="companyName"
              className="block text-sm font-medium text-gray-700"
            >
              Company Name:
            </label>
            <input
              type="text"
              id="companyName"
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
              required
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div className="form-group">
            <label
              htmlFor="phoneNumber"
              className="block text-sm font-medium text-gray-700"
            >
              Phone Number:
            </label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              required
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div className="form-group">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div className="form-group">
            <label
              htmlFor="supportType"
              className="block text-sm font-medium text-gray-700"
            >
              Support Type:
            </label>
            <select
              id="supportType"
              name="supportType"
              value={formData.supportType}
              onChange={handleChange}
              required
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            >
              <option value="">Select...</option>
              <option value="Forti">Forti</option>
              <option value="Cisco">Cisco</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div className="form-group">
            <label
              htmlFor="supportRequest"
              className="block text-sm font-medium text-gray-700"
            >
              Support Request:
            </label>
            <textarea
              id="supportRequest"
              name="supportRequest"
              value={formData.supportRequest}
              onChange={handleChange}
              required
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-indigo-600 text-white font-semibold rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default SupportPortal;
