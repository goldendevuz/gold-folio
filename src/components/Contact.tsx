"use client";
import React, { useState } from "react";
import Button from "./UI/Button";
import { MotionSection } from "./UI/MotionComponents";
import { SubmitHandler, useForm } from "react-hook-form";

interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const Contact = () => {
  const { register, handleSubmit, reset } = useForm<ContactForm>({
    defaultValues: {},
  });
  const [loading, setLoading] = useState(false);

  const submit: SubmitHandler<ContactForm> = async (data) => {
    const message = `GOLDENDEV PORTFOLIO \n\n Name: ${data.name} \n Email: ${data.email} \n Subject: ${data.subject} \n Message: ${data.message}`;

    // fetch config settings
    const settings = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "cache-control": "no-cache",
      },
      body: JSON.stringify({
        chat_id: process.env.NEXT_PUBLIC_TELEGRAM_CHAT_ID,
        text: message,
      }),
    };

    // Sending message to telegram bot
    try {
      setLoading(true);

      const response = await fetch(
        "https://api.telegram.org/bot" +
          process.env.NEXT_PUBLIC_TELEGRAM_BOT_ID +
          "/sendMessage",
        settings
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      window.alert("Message successfully sent!");
      reset();
    } catch (error) {
      console.error("There was a problem with your fetch operation:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
  <MotionSection
    initial={{ scale: 0.95, opacity: 0 }}
    whileInView={{ scale: 1, opacity: 1 }}
    transition={{ delay: 0.2, duration: 0.6, ease: "anticipate" }}
    className="wrapper flex justify-center py-28 px-4 md:px-16"
    id="contact"
  >
    <div className="relative bg-[#1f1f1f] rounded-2xl border border-white/10 p-10 text-white w-full max-w-xl">
      <h4 className="text-3xl font-bold mb-12 text-center">Get in Touch</h4>

      <ul className="space-y-8 text-lg">
        <li className="flex items-center gap-5">
          <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
            <i className="fa-brands fa-telegram text-xl text-white" />
          </div>
          <span>@avengerdev</span>
        </li>

        <li className="flex items-center gap-5">
          <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
            <i className="fa-solid fa-envelope text-xl text-white" />
          </div>
          <span>goldendevuz@gmail.com</span>
        </li>

        <li className="flex items-center gap-5">
          <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
            <i className="fa-solid fa-location-dot text-xl text-white" />
          </div>
          <span>Tashkent, Uzbekistan</span>
        </li>
      </ul>
    </div>
  </MotionSection>
);



};

export default Contact;
