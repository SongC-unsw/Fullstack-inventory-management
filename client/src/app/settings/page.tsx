"use client";
import React, { useState } from "react";
import Header from "@/app/(components)/Header";

type userSetting = {
  label: string;
  value: string | boolean;
  type: "text" | "toggle";
};

const mockUserSettings: userSetting[] = [
  { label: "Username", value: "John Doe", type: "text" },
  { label: "Email", value: "john.doe@example.com", type: "text" },
  { label: "Notifications", value: true, type: "toggle" },
  { label: "Language", value: "English", type: "text" },
];

const Settings = () => {
  const [userSettings, setUserSettings] =
    useState<userSetting[]>(mockUserSettings);

  const handleToggleChange = (index: number) => {
    const settingsCopy = [...userSettings];
    settingsCopy[index].value = !settingsCopy[index].value as boolean;
    setUserSettings(settingsCopy);
  };

  const renderSettingValue = (setting: userSetting, index: number) => {
    if (setting.type === "toggle") {
      return (
        <div className="flex items-center">
          <button
            onClick={() => handleToggleChange(index)}
            className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
              setting.value ? "bg-blue-600" : "bg-gray-300"
            }`}
          >
            <span
              className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                setting.value ? "translate-x-6" : "translate-x-1"
              }`}
            />
          </button>
          <span className="ml-3 text-sm text-gray-700">
            {setting.value ? "On" : "Off"}
          </span>
        </div>
      );
    }
    return <span className="text-lg">{setting.value as string}</span>;
  };

  return (
    <div className="w-full">
      <Header name="User Settings" />
      <div className="overflow-x-auto mt-5 shadow-md">
        <table className="min-w-full bg-white rounded-lg">
          <thead className="bg-gray-800 text-white">
            <tr>
              <th className="text-left py-3 px-4 uppercase font-semibold text-sm">
                Setting
              </th>
              <th className="text-left py-3 px-4 uppercase font-semibold text-sm">
                Value
              </th>
            </tr>
          </thead>
          <tbody>
            {userSettings.map((setting, index) => (
              <tr key={index}>
                <td className="text-left py-3 px-4 text-lg">{setting.label}</td>
                <td className="text-left py-3 px-4">
                  {renderSettingValue(setting, index)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Settings;
