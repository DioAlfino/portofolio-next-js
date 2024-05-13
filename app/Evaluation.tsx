"use client";

import axios from "axios";
import { use, useEffect, useState } from "react";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const Evaluation: React.FC = () => {
  const [userData, setUserData] = useState<FormData[] | null>(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get("http://localhost:3001/user");
        setUserData(response.data);
      } catch (err) {
        console.log(err);
      }
    };
    getData();
  }, []);

  return (
    <>
      <div>
        {userData && (
          <div>
            {userData.map((user, index) => (
              <div key={index}>
                <div className="grid grid-cols-4 gap-3">
                  <div className=" border p-4">
                    <p className=" font-semibold">Name</p>
                    {user.name}
                  </div>
                  <div className=" border p-4">
                    <p className=" font-semibold">Email</p>
                    {user.email}
                  </div>
                  <div className=" border p-4">
                    <p className="font-semibold">Subject</p>
                    {user.subject}
                  </div>
                  <div className=" border p-4">
                    <p className=" font-semibold">Message</p>
                    {user.message}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Evaluation;
