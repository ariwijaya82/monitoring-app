"use client";

import axios from "axios";
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
  const [settingData, setSettingData] = useState<ISettingData | null>(null);

  const fetchData = async (url: string, user: string, pass: string) => {
    try {
      const response = await axios.get(`${url}/queues`, {
        auth: {
          username: user,
          password: pass,
        },
      });
  
      const queues = response.data;
  
      // Get consumers information
      const consumersResponse = await axios.get(`${url}/consumers`, {
        auth: {
          username: user,
          password: pass,
        },
      });
  
      const consumers = consumersResponse.data;
  
      // Combine queue data with consumers
      const queueData = queues.map((queue: any) => {
        const queueConsumers = consumers.filter((consumer: any) => consumer.queue === queue.name);
        return {
          name: queue.name,
          consumerCount: queueConsumers.length,
          consumers: queueConsumers.map((consumer: any) => ({
            ip: consumer.client_properties && consumer.client_properties.connection_name,
            user: consumer.user,
          })),
        };
      });
  
      return queueData
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    const data_string = localStorage.getItem("setting_parameter");
    if (!data_string) return;

    const data: ISettingData = JSON.parse(data_string);
    setSettingData(data);
    const result = fetchData(data.rabbitmq.host, data.rabbitmq.user, data.rabbitmq.pass)
    console.log(result)
  }, []);

  useEffect(() => {
    // axios.get(`https:`);
  });

  return (
    <div>
      <div className="card max-w-full mb-8">
        <div className="card-body">
          <h2 className="card-header text-white">Services</h2>
        </div>
      </div>
      <div className="card max-w-full">
        {!settingData ? (
          <div>Please setting parameter first</div>
        ) : (
          <div className="card-body">
            <h3 className="card-header text-white">RabbitMQ</h3>
            <div className="mb-4">
              
            </div>
            <h3 className="card-header text-white">
              API Gateway Configuration
            </h3>
            <div>
              
            </div>
            <h3 className="card-header text-white">Monitoring Interval</h3>
            <div>
              
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
