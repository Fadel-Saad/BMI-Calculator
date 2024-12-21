export default function App() {
  return (
    <div className="main">
      <UserInput />
      <Result />
      <Tips />
      <Limitations />
    </div>
  );
}

function UserInput() {
  return (
    <div className="hero">
      <div className="hero-left">
        <h1>
          Body Mass <br /> Index Calculator
        </h1>
        <p>
          Better understand your weight in relation to your height
          using our body mass index (BM) calcylator. while BMI is not
          the sole determinant of a healthy weight, it offers a
          valuable starting point to evaluate your overall health and
          well-being
        </p>
      </div>

      <form className="form">
        <h2>Enter your details below</h2>

        <div className="toggle">
          <input type="radio" id="metric" name="unit"></input>
          <label for="Metric">Metric</label>
        </div>
        <div className="toggle">
          <input type="radio" name="unit"></input>
          <label for="Imperial">Imperial</label>
        </div>

        <div className="input-group">
          <label>Height</label>
          <div className="input-wrapper">
            <input type="text" placeholder="0"></input>
            <span>cm</span>
          </div>
        </div>
        <div className="input-group">
          <label>Weight</label>
          <div className="input-wrapper">
            <input type="text" placeholder="0"></input>
            <span>kg</span>
          </div>
        </div>

        <div className="form-footer">
          <h3>Welcome!</h3>
          <p>
            Enter your height and weight and you’ll see your BMI
            result here
          </p>
        </div>
      </form>
    </div>
  );
}

function Result() {
  return (
    <div className="result">
      <div className="img-container">
        <img
          src={`${process.env.PUBLIC_URL}/images/man-eating.webp`}
          alt="Man eating"
        />
      </div>
      <div className="text-result">
        <h2>What your BMI result means</h2>
        <p>
          A BMI range of 18.5 to 24.9 is considered a 'healthy
          weight.' Maintaining a healthy weight may lower your chances
          of experiencing health issues later on, such as obesity and
          type 2 diabetes. Aim for a nutritious diet with reduced fat
          and sugar content, incorporating ample fruits and
          vegetables. Additionally, strive for regular physical
          activity, ideally about 30 minutes daily for five days a
          week.
        </p>
      </div>
    </div>
  );
}

function Tips() {
  return (
    <div className="tips-container">
      <div className="tips">
        <Tip>
          <img
            src={`${process.env.PUBLIC_URL}/images/icon-eating.svg`}
            alt="Man eating"
          />
          <div className="tip-text">
            <h3>Healthy eating</h3>
            <p>
              Healthy eating promotes weight control, disease
              prevention, better digestion, immunity, mental clarity,
              and mood.
            </p>
          </div>
        </Tip>
        <Tip>
          <img
            src={`${process.env.PUBLIC_URL}/images/icon-exercise.svg`}
            alt="Man eating"
          />
          <div className="tip-text">
            <h3>Regular exercise</h3>
            <p>
              Exercise improves fitness, aids weight control, elevates
              mood, and reduces disease risk, fostering wellness and
              longevity.
            </p>
          </div>
        </Tip>
        <Tip>
          <img
            src={`${process.env.PUBLIC_URL}/images/icon-sleep.svg`}
            alt="Man eating"
          />
          <div className="tip-text">
            <h3>Adequate sleep</h3>
            <p>
              Sleep enhances mental clarity, emotional stability, and
              physical wellness, promoting overall restoration and
              rejuvenation.
            </p>
          </div>
        </Tip>
      </div>
    </div>
  );
}

function Limitations() {
  return (
    <div className="limitations">
      <div className="limit-intro">
        <h2>Limitations of BMI</h2>
        <p>
          Although BMI is often a practical indicator of healthy
          weight, it is not suited for every person. Specific groups
          should carefully consider their BMI outcomes, and in certain
          cases, the measurement may not be beneficial to use.
        </p>
      </div>
      <div className="items">
        <Item>
          <div className="item-header">
            <img
              src={`${process.env.PUBLIC_URL}/images/icon-gender.svg`}
              alt="Man eating"
            />
            <h4>Gender</h4>
          </div>
          <p>
            The development and body fat composition of girls and boys
            vary with age. Consequently, a child's age and gender are
            considered when evaluating their BMI.
          </p>
        </Item>
        <Item>
          <div className="item-header">
            <img
              src={`${process.env.PUBLIC_URL}/images/icon-age.svg`}
              alt="Man eating"
            />
            <h4>Age</h4>
          </div>
          <p>
            In aging individuals, increased body fat and muscle loss
            may cause BMI to underestimate body fat content.
          </p>
        </Item>
        <Item>
          <div className="item-header">
            <img
              src={`${process.env.PUBLIC_URL}/images/icon-muscle.svg`}
              alt="Man eating"
            />
            <h4>Muscle</h4>
          </div>
          <p>
            BMI may misclassify muscular individuals as overweight or
            obese, as it doesn't differentiate muscle from fat.
          </p>
        </Item>
        <Item>
          <div className="item-header">
            <img
              src={`${process.env.PUBLIC_URL}/images/icon-pregnancy.svg`}
              alt="Man eating"
            />
            <h4>Pregnancy</h4>
          </div>
          <p>
            Expectant mothers experience weight gain due to their
            growing baby. Maintaining a healthy pre-pregnancy BMI is
            advisable to minimise health risks for both mother and
            child.
          </p>
        </Item>
        <Item>
          <div className="item-header">
            <img
              src={`${process.env.PUBLIC_URL}/images/icon-race.svg`}
              alt="Man eating"
            />
            <h4>Race</h4>
          </div>
          <p>
            Certain health concerns may affect individuals of some
            Black and Asian origins at lower BMIs than others. To
            learn more, it is advised to discuss this with your GP or
            practice nurse.
          </p>
        </Item>
      </div>
    </div>
  );
}

function Tip({ children }) {
  return <div className="tip">{children}</div>;
}

function Item({ children }) {
  return <div className="item">{children}</div>;
}
