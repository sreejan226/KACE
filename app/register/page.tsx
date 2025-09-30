"use client";

import { useForm, SubmitHandler } from "react-hook-form";
import { useState } from "react";

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  dob: string;
  gender: string;
  institution: string;
  year: string;
  experience: string;
  previousConferences?: number;
  committee1: string;
  unga1: string;
  unga2: string;
  unga3: string;
  unga4: string;
  food: string;
  agree: boolean;
  updates?: boolean;
};

export default function RegisterPage() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    try {
      const response = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      console.log("Server Response:", result);

      if (response.ok) {
        setSubmitted(true);
      } else {
        alert("Something went wrong! Check console for details.");
      }
    } catch (err) {
      console.error("Submission error:", err);
      alert("Error submitting form");
    }
  };

  const ungaFields: (keyof FormData)[] = ["unga1", "unga2", "unga3", "unga4"];

  return (
    <div className="min-h-screen bg-gradient-to-br bg-black text-white py-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* LEFT SIDE – Registration Details */}
        <div className="hidden md:block">
          <div className="sticky top-90 left-20 -translate-y-1/2 w-80 bg-[#111] p-6 rounded-2xl shadow-xl border border-yellow-500/30 z-40">
            <h2 className="text-2xl font-bold text-yellow-400 mb-4">
              Registration Details
            </h2>
            <ul className="space-y-3 text-l leading-relaxed text-gray-300">
              <li>📍 Venue: KACE 9</li>
              <li>📅 Dates: 8th – 9th November 2025</li>
              <li>🎓 Open to: All 1st years</li>
              <li>💰 Registration Fee: FREE</li>
              <li>🍴 Food (Paid)</li>
              <li>📧 For queries: Contact MUNSOC</li>
            </ul>
          </div>
        </div>

        {/* RIGHT SIDE – Form */}
        <div className="md:col-span-2">
          <div className="bg-[#111] p-8 rounded-2xl shadow-xl border border-yellow-500/30">
            <h1 className="text-3xl font-bold text-yellow-400 text-center mb-6">
              Register Now
            </h1>

            {submitted ? (
              <div className="text-center text-green-400 font-semibold">
                ✅ Thank you for registering! We’ll be in touch.
              </div>
            ) : (
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="grid grid-cols-1 gap-6"
              >
                {/* Personal Information */}
                <h2 className="form-section">Personal Information</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  <input
                    {...register("firstName", { required: "First name is required" })}
                    placeholder="First Name *"
                    className="input"
                  />
                  {errors.firstName && <span className="text-red-500 text-sm">{errors.firstName.message}</span>}

                  <input
                    {...register("lastName", { required: "Last name is required" })}
                    placeholder="Last Name *"
                    className="input"
                  />
                  {errors.lastName && <span className="text-red-500 text-sm">{errors.lastName.message}</span>}
                </div>

                <input
                  {...register("email", { required: "Email is required" })}
                  placeholder="Email Address *"
                  type="email"
                  className="input"
                />
                {errors.email && <span className="text-red-500 text-sm">{errors.email.message}</span>}

                <input
                  {...register("phone", { required: "Phone number is required" })}
                  placeholder="Phone Number *"
                  type="tel"
                  className="input"
                />
                {errors.phone && <span className="text-red-500 text-sm">{errors.phone.message}</span>}

                <input
                  {...register("dob", { required: "Date of birth is required" })}
                  placeholder="Date of Birth (dd-mm-yyyy)"
                  type="text"
                  className="input"
                />
                {errors.dob && <span className="text-red-500 text-sm">{errors.dob.message}</span>}

                <select {...register("gender", { required: "Gender is required" })} className="input">
                  <option value="">Select Gender</option>
                  <option>Male</option>
                  <option>Female</option>
                  <option>Other</option>
                </select>
                {errors.gender && <span className="text-red-500 text-sm">{errors.gender.message}</span>}

                {/* Academic Information */}
                <h2 className="form-section">Academic Information</h2>
                <input
                  {...register("institution", { required: "Institution is required" })}
                  placeholder="Institution/School *"
                  className="input"
                />
                {errors.institution && <span className="text-red-500 text-sm">{errors.institution.message}</span>}

                <select {...register("year", { required: "Year is required" })} className="input">
                  <option value="">Select Year</option>
                  <option>1st Year</option>
                  <option>2nd Year</option>
                  <option>3rd Year</option>
                  <option>4th Year</option>
                  <option>Other</option>
                </select>
                {errors.year && <span className="text-red-500 text-sm">{errors.year.message}</span>}

                {/* MUN Experience */}
                <h2 className="form-section">MUN Experience</h2>
                <select {...register("experience", { required: "Experience is required" })} className="input">
                  <option value="">Select Experience</option>
                  <option>Beginner</option>
                  <option>Intermediate</option>
                  <option>Advanced</option>
                </select>
                {errors.experience && <span className="text-red-500 text-sm">{errors.experience.message}</span>}

                <input
                  {...register("previousConferences")}
                  placeholder="Number of Previous Conferences"
                  type="number"
                  className="input"
                />

                {/* Committee Preferences */}
                <h2 className="form-section">Committee Preferences</h2>
                <select {...register("committee1", { required: "Committee choice is required" })} className="input">
                  <option value="">First Choice Committee *</option>
                  <option>UN Women</option>
                </select>
                {errors.committee1 && <span className="text-red-500 text-sm">{errors.committee1.message}</span>}

                {/* UNGA Delegation Choices */}
                <h2 className="form-section">UN Women Delegation Choices</h2>
                {ungaFields.map((field, idx) => (
                  <input
                    key={field}
                    {...register(field, { required: `Delegation Choice ${idx + 1} is required` })}
                    placeholder={`Delegation Choice ${idx + 1} *`}
                    className="input"
                  />
                ))}

                {/* Additional Information */}
                <h2 className="form-section">Additional Information</h2>
                <select {...register("food", { required: "Food preference is required" })} className="input">
                  <option value="">Food Preference *</option>
                  <option>Veg</option>
                  <option>Non-Veg</option>
                </select>
                {errors.food && <span className="text-red-500 text-sm">{errors.food.message}</span>}

                <label className="flex items-center gap-2 text-sm">
                  <input type="checkbox" {...register("agree", { required: "You must agree" })} /> I agree to the Terms and Conditions and Privacy Policy *
                </label>
                {errors.agree && <span className="text-red-500 text-sm">{errors.agree.message}</span>}

                <label className="flex items-center gap-2 text-sm">
                  <input type="checkbox" {...register("updates")} /> I would like to receive updates about future MUN events
                </label>

                <button type="submit" className="w-full bg-yellow-500 text-black font-bold py-3 rounded-lg shadow hover:bg-yellow-400 transition">
                  Submit
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
