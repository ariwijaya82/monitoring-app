"use client";

import { useEffect, useState } from "react";

export default function SettingsPage() {
  type ISettingData = {
    rabbitmq: {
      host: string;
      port: number;
      user: string;
      pass: string;
    };
    api_url: string;
    interval: number;
  };
  const [settingData, setSettingData] = useState<ISettingData>({
    rabbitmq: {
      host: "",
      port: 0,
      user: "",
      pass: "",
    },
    api_url: "",
    interval: 0,
  });

  useEffect(() => {
    const data_string = localStorage.getItem("setting_parameter");
    if (!data_string) return;

    const data: ISettingData = JSON.parse(data_string);
    setSettingData(data);
  }, []);

  const onChangeParameter = (key: string, value: string | number) => {
    const setting_data = { ...settingData };
    if (key === "host") {
      setting_data.rabbitmq.host = value as string;
    } else if (key === "port") {
      setting_data.rabbitmq.port = value as number;
    } else if (key === "user") {
      setting_data.rabbitmq.user = value as string;
    } else if (key === "pass") {
      setting_data.rabbitmq.pass = value as string;
    } else if (key === "url") {
      setting_data.api_url = value as string;
    } else if (key === "monitoring-interval") {
      setting_data.interval = value as number;
    }
  };

  const onClickSave = () => {
    localStorage.setItem("setting_parameter", JSON.stringify(settingData));
  };
  return (
    <div>
      <div className="card max-w-full mb-8">
        <div className="card-body">
          <h2 className="card-header text-white">Settings</h2>
        </div>
      </div>
      <div className="card max-w-full">
        <div className="card-body">
          <h3 className="card-header text-white">RabbitMQ Configuration</h3>
          <div className="mb-4">
            <form className="space-y-4">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label className="sr-only" htmlFor="host">
                    Host
                  </label>
                  <input
                    className="input input-solid max-w-full"
                    placeholder="Host"
                    type="text"
                    id="host"
                    onChange={(e) => onChangeParameter("host", e.target.value)}
                  />
                </div>

                <div>
                  <label className="sr-only" htmlFor="port">
                    Port
                  </label>
                  <input
                    className="input input-solid max-w-full"
                    placeholder="Port"
                    type="number"
                    id="port"
                    onChange={(e) => onChangeParameter("port", e.target.value)}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label className="sr-only" htmlFor="username">
                    Username
                  </label>
                  <input
                    className="input input-solid max-w-full"
                    placeholder="Username"
                    type="text"
                    id="username"
                    onChange={(e) => onChangeParameter("user", e.target.value)}
                  />
                </div>

                <div>
                  <label className="sr-only" htmlFor="password">
                    Password
                  </label>
                  <input
                    className="input input-solid max-w-full"
                    placeholder="Password"
                    type="password"
                    id="password"
                    onChange={(e) => onChangeParameter("pass", e.target.value)}
                  />
                </div>
              </div>
            </form>
          </div>
          <h3 className="card-header text-white">API Gateway Configuration</h3>
          <div>
            <form className="space-y-4">
              <div className="w-full">
                <label className="sr-only" htmlFor="url">
                  URL
                </label>
                <input
                  className="input input-solid max-w-full"
                  placeholder="URL"
                  type="text"
                  id="url"
                  onChange={(e) => onChangeParameter("url", e.target.value)}
                />
              </div>
            </form>
          </div>
          <h3 className="card-header text-white">Monitoring Interval</h3>
          <div>
            <form className="space-y-4">
              <div className="w-full">
                <label className="sr-only" htmlFor="monitoring-interval">
                  Monitoring Interval
                </label>
                <input
                  className="input input-solid max-w-full"
                  placeholder="Monitoring Interval (seconds)"
                  type="number"
                  id="monitoring-interval"
                  onChange={(e) =>
                    onChangeParameter("monitoring-interval", e.target.value)
                  }
                />
              </div>

              <div className="mt-4">
                <button
                  type="button"
                  className="rounded-lg btn btn-primary"
                  onClick={() => onClickSave()}
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
