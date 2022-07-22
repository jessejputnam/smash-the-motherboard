// Import CSS
import styles from "./BecomeCreatorForm.module.css";

const BecomeCreatorForm = (props) => {
  const ignoredWords = ["a", "an", "the", "and", "&"];
  const inputTitle = document.querySelector("#title");
  const inputGenre = document.querySelector("#genre");
  const inputDesc = document.querySelector("#desc");
  const inputTier1 = document.querySelector("#tier1");
  const inputTier2 = document.querySelector("#tier2");
  const inputTier3 = document.querySelector("#tier3");

  const becomeCreator = (e) => {
    e.preventDefault();

    const keywords = [
      inputGenre.value,
      ...inputTitle.value
        .toLowerCase()
        .split(" ")
        .filter((word) => !ignoredWords.includes(word))
    ];
    const tier1 = inputTier1.value
      .split(";")
      .map((reward) => reward.trim())
      .filter((el) => el !== "");
    const tier2 = inputTier2.value
      .split(";")
      .map((reward) => reward.trim())
      .filter((el) => el !== "");
    const tier3 = inputTier3.value
      .split(";")
      .map((reward) => reward.trim())
      .filter((el) => el !== "");

    props.becomeCreator({
      field: "creator",
      value: {
        title: inputTitle.value,
        keywords: keywords,
        genre: inputGenre.value.toLowerCase(),
        desc: inputDesc.value,
        tier1: tier1,
        tier2: tier2,
        tier3: tier3
      }
    });
  };

  const selectElClass = (e) => {
    e.target.classList = [];
  };

  return (
    <form onSubmit={becomeCreator} className={styles.BecomeCreatorForm}>
      <h3>Project Information</h3>
      <input id='title' type='text' placeholder='Project Title' required />

      <select
        onChange={selectElClass}
        className={styles.placeholder}
        name='genre'
        id='genre'
        defaultValue={"default"}
        required
      >
        <option value={"default"} disabled hidden>
          Genre
        </option>
        <option value='music'>Music</option>
        <option value='podcast'>Podcast</option>
        <option value='film'>Film</option>
        <option value='writing'>Writing</option>
      </select>
      <textarea id='desc' type='text' placeholder='Project Description' />

      <hr />
      <hr />

      <h3>Member Tier Information</h3>
      <p>Separate rewards with semicolons</p>
      <p>
        <i>ex. Meet with band ; Get exclusive sticker ; Get autographed card</i>
      </p>
      <input
        id='tier1'
        type='text'
        placeholder='Tier 1 rewards ($5)'
        required
      />
      <input
        id='tier2'
        type='text'
        placeholder='Tier 2 rewards ($10)'
        required
      />
      <input
        id='tier3'
        type='text'
        placeholder='Tier 3 rewards ($15)'
        required
      />

      <input
        type='submit'
        className={styles.createBtn}
        value={"Become a Creator"}
      ></input>
    </form>
  );
};

export default BecomeCreatorForm;
