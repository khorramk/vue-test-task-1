<template>
  <section id="features" class="features-section">
    <div class="section-content">
      <div class="feature-intro">
        <h2>What do we do?</h2>
      <p>
        Lorem ipsum dolor sit, amet 
      </p>
      </div>
      

      <div class="feature-container">
        <div class="feature">
          <h3>Get Online week</h3>
          <p class="feature__content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin id
            elit nec arcu cursus aliquam.
          </p>
          <app-link-button :bordered="true" page="/learn-more">
          Learn more
        </app-link-button>
        </div>

        <div class="feature">
          <h3>Learn My way</h3>
          <p class="feature__content">
            Curabitur suscipit orci vel turpis fermentum, ut fermentum quam
            cursus. Duis et mauris vitae velit venenatis accumsan vel nec dui.
          </p>
          <app-link-button :bordered="true" page="/learn-more">
          Learn more
        </app-link-button>
        </div>

        <div class="feature">
          <h3>Feature 3</h3>
          <p class="feature__content">
            Curabitur suscipit orci vel turpis fermentum, ut fermentum quam
            cursus. Duis et mauris vitae velit venenatis accumsan vel nec dui.
          </p>
          <app-link-button :bordered="true" page="/learn-more">
          Learn more
        </app-link-button>
        </div>
        <div class="feature">
          <h3>Feature 4</h3>
          <p class="feature__content">
            Curabitur suscipit orci vel turpis fermentum, ut fermentum quam
            cursus. Duis et mauris vitae velit venenatis accumsan vel nec dui.
          </p>
          <app-link-button :bordered="true" page="/learn-more">
          Learn more
        </app-link-button>
        </div>
      </div>
      <div class="link-container">
        <app-link-button :bordered="true" page="/learn-more">
          Learn more
        </app-link-button>
      </div>
    </div>
  </section>
</template>
