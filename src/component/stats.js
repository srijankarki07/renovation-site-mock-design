import React, { useState, useEffect, useRef } from "react";
import { FaUsers } from "react-icons/fa";
import { BsFillBuildingsFill } from "react-icons/bs";
import { IoTrophyOutline } from "react-icons/io5";

export default function Stats() {
  const stats = [
    { id: 1, name: "Happy Clients", value: 250, icon: <FaUsers /> },
    {
      id: 2,
      name: "Projects Finished",
      value: 201,
      icon: <BsFillBuildingsFill />,
    },
    { id: 3, name: "Awards", value: 59, icon: <IoTrophyOutline /> },
  ];

  const statsRef = useRef(null);
  const [inView, setInView] = useState(false);
  const [hasCounted, setHasCounted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting && !hasCounted) {
          setInView(true);
          setHasCounted(true);
        }
      },
      { threshold: 0.5 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current);
      }
    };
  }, [hasCounted]);

  return (
    <div className="stats" ref={statsRef}>
      {stats.map((item) => (
        <div key={item.id} className="stats-item">
          <div className="stats-icon">{item.icon}</div>
          {inView && <CountUp number={item.value} />}
          <div className="stats-name">{item.name}</div>
        </div>
      ))}
    </div>
  );
}

function CountUp({ number }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let interval;
    if (count < number) {
      interval = setInterval(() => {
        setCount((prevCount) => {
          if (prevCount < number) return prevCount + 1;
          clearInterval(interval);
          return prevCount;
        });
      }, 8);
    }
    return () => clearInterval(interval);
  }, [count, number]);

  return <div className="stats-value">{count}</div>;
}
