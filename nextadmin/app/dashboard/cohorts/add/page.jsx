"use client";

import React, { useState, useEffect } from 'react';

import styles from "@/app/ui/dashboard/cohorts/addCohort/addCohort.module.css";


const CohortForm = () => {
  const [cohortName, setCohortName] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [levels, setLevels] = useState([{ levelName: '', startDate: '', endDate: '', facilitatorId: null }]);
  const [facilitators, setFacilitators] = useState([]);

  useEffect(() => {
    const fetchFacilitators = async () => {
      try {
        const response = await fetch('/api/facilitators');
        const data = await response.json();
        setFacilitators(data);
      } catch (error) {
        console.error('Error fetching facilitators:', error);
      }
    };

    fetchFacilitators();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Create a new cohort object
    const newCohort = { cohortName, startDate, endDate, levels };
    // Add the new cohort to the state or display it in the UI
    console.log(newCohort);
    // Reset the form
    setCohortName('');
    setStartDate('');
    setEndDate('');
    setLevels([{ levelName: '', startDate: '', endDate: '', facilitatorId: null }]);
  };

  const addLevel = () => {
    setLevels([...levels, { levelName: '', startDate: '', endDate: '', facilitatorId: null }]);
  };

  const handleLevelChange = (index, field, value) => {
    const updatedLevels = [...levels];
    updatedLevels[index][field] = value;
    setLevels(updatedLevels);
  };

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label className={styles.label}>Cohort Name</label>
          <input
            className={styles.input}
            type="text"
            placeholder="Enter cohort name"
            value={cohortName}
            onChange={(e) => setCohortName(e.target.value)}
          />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label}>Start Date</label>
          <input
            className={styles.input}
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label}>End Date</label>
          <input
            className={styles.input}
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
          />
        </div>

        <button type="button" onClick={addLevel} className={styles.button}>
          Add Level
        </button>

        {levels.map((level, index) => (
          <div className={styles.levelGroup} key={index}>
            <h3>Level {index + 1}</h3>
            <div className={styles.formGroup}>
              <label className={styles.label}>Level Name</label>
              <input
                className={styles.input}
                type="text"
                placeholder="Enter level name"
                value={level.levelName}
                onChange={(e) => handleLevelChange(index, 'levelName', e.target.value)}
              />
            </div>
            <div className={styles.formGroup}>
              <label className={styles.label}>Start Date</label>
              <input
                className={styles.input}
                type="date"
                value={level.startDate}
                onChange={(e) => handleLevelChange(index, 'startDate', e.target.value)}
              />
            </div>
            <div className={styles.formGroup}>
              <label className={styles.label}>End Date</label>
              <input
                className={styles.input}
                type="date"
                value={level.endDate}
                onChange={(e) => handleLevelChange(index, 'endDate', e.target.value)}
              />
            </div>
            <div className={styles.formGroup}>
              <label className={styles.label}>Facilitator</label>
              <select
                className={styles.select}
                value={level.facilitatorId || ''}
                onChange={(e) => handleLevelChange(index, 'facilitatorId', e.target.value)}
              >
                <option value="">Select Facilitator</option>
                {facilitators.map((facilitator) => (
                  <option key={facilitator.id} value={facilitator.id}>
                    {facilitator.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
        ))}

        <button type="submit" className={styles.button}>
          Create Cohort
        </button>
      </form>
    </div>
  );
};

export default CohortForm;