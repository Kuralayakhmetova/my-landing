import { useState } from "react";
function UserForm() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [birthDate, setBirthDate] = useState("");
  const [selectedGender, setSelectedGender] = useState("");
  const [Country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [submittedData, setSubmittedData] = useState(null); // Для вывода данных

  const changeName = () => {
    setName(event.target.value);
  };

  const changeEmail = () => {
    setEmail(event.target.value);
  };

  const handleBirthDateChange = () => {
    setBirthDate(event.target.value);
  };

  // Обработчик отправки формы
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData({ name, email, birthDate, selectedGender, Country, city });
  };

  return (
    // TODO: Add card styles

    <div>
      <h2>Анкетная форма</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Имя: </label>
          <input
            type="text"
            onChange={changeName}
            placeholder="Enter your name"
          />
        </div>
        <div>
          <label htmlFor="email">Электронная почта: </label>
          <input type="email" onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div>
          <label htmlFor="birthDate">Дата рождения: </label>
          <input type="date" onChange={handleBirthDateChange} />
        </div>
        <div>
          <label htmlFor="selectedGender">Пол: </label>

          <label>
            <input
              type="radio"
              value="Мужской"
              checked={selectedGender === "Мужской"}
              onChange={(e) => setSelectedGender(e.target.value)}
            />
            Мужской
          </label>
          <label>
            <input
              type="radio"
              value="Женский"
              checked={selectedGender === "Женский"}
              onChange={(e) => setSelectedGender(e.target.value)}
            />
            Женский
          </label>
        </div>
        <div>
          <label htmlFor="selectedCountry">Страна: </label>
          <select value={Country} onChange={(e) => setCountry(e.target.value)}>
            <option value="Казахстан">Казахстан</option>
            <option value="Америка">Америка</option>
            <option value="Германия">Германия</option>
            <option value="Япония">Япония</option>
          </select>
        </div>
        <div>
          <label htmlFor="City">Город: </label>

          <input
            type="text"
            onChange={(e) => setCity(e.target.value)}
            placeholder="Enter your city"
          />
        </div>
        <button type="submit">Отправить</button>
      </form>
      {/* Вывод данных на страницу */}
      {submittedData && (
        <div>
          <h2>Введенные данные:</h2>
          <p>
            <strong>Имя:</strong> {submittedData.name}
          </p>
          <p>
            <strong>Email:</strong> {submittedData.email}
          </p>
          <p>
            <strong>Дата рождения:</strong> {submittedData.birthDate}
          </p>
          <p>
            <strong>Пол:</strong> {submittedData.selectedGender}
          </p>
          <p>
            <strong>Страна:</strong> {submittedData.Country}
          </p>
          <p>
            <strong>Город:</strong> {submittedData.city}
          </p>
        </div>
      )}
    </div>
  );
}
export default UserForm;
