import DatePicker from 'react-datepicker';
import './PlayKitForm.css';
import "react-datepicker/dist/react-datepicker.css";

const PlayKitForm = ({ childName, setChildName, birthDate, setBirthDate }) => {

  const handleChildName = (name) => {
    setChildName(name);
  };

  const handleBirthDate = (date) => {
    setBirthDate(date);
  };

  return (
    <div className="form-container">
      <div className="input">
        <p>Your child's name (optional)</p>
        <input value={childName} onChange={name => handleChildName(name)} className="text-input" />
      </div>
      <div className="input">
        <p>Birth date/due date</p>
        <DatePicker selected={birthDate} onChange={date => handleBirthDate(date)} />
      </div>
      <button className="green-btn">Subscribe now</button>
    </div>
  )
};

export default PlayKitForm;