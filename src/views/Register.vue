<template>
  <section class="hero is-success is-fullheight">
    <div class="hero-body">
      <div class="container has-text-centered">
        <div class="column is-4 is-offset-4">
          <h3 class="title has-text-grey">Register</h3>
          <p class="subtitle has-text-grey">Please register to proceed.</p>
          <div class="box">
            <figure class="avatar">
              <img src="https://placehold.it/128x128">
            </figure>

            <form @submit.prevent="onFormSubmit">
              <!--              Username-->
              <div class="field">
                <div class="control">
                  <input
                    class="input is-large"
                    type="text"
                    placeholder="Username"
                    v-model="form.username"
                  >
                </div>
              </div>
              <!--              Name-->
              <div class="field">
                <div class="control">
                  <input
                    class="input is-large"
                    type="text"
                    placeholder="Name"
                    v-model="form.name"
                  >
                </div>
              </div>
              <!--              Email-->
              <div class="field">
                <div class="control">
                  <input
                    class="input is-large"
                    type="email"
                    placeholder="Your Email"
                    v-model="form.email"
                  >
                </div>
              </div>
              <!--              Avatar-->
              <div class="field">
                <div class="control">
                  <input
                    class="input is-large"
                    type="text"
                    placeholder="Avatar"
                    autocomplete=""
                    v-model="form.avatar"
                  >
                  <div v-if="$v.form.avatar.$error" class="form-error">
                    <span v-if="!$v.form.avatar.url" class="help is-danger">URL Format is not valid !</span>
                    <span v-if="!$v.form.avatar.supportedFileType"
                          class="help is-danger">Selected file is not valid !</span>
                  </div>
                </div>
              </div>
              <!--              Password-->
              <div class="field">
                <div class="control">
                  <input
                    class="input is-large"
                    type="password"
                    placeholder="Your Password"
                    autocomplete="new-password"
                    v-model="form.password"
                  >
                </div>
              </div>
              <!--              Password Confirm-->
              <div class="field">
                <div class="control">
                  <input
                    class="input is-large"
                    type="password"
                    placeholder="Password Confirmation"
                    autocomplete="off"
                    v-model="form.passwordConfirm"
                  >
                </div>
              </div>

              <button
                type="submit"
                class="button is-block is-info is-large is-fullwidth"
              >Register
              </button>
            </form>
          </div>
          <p class="has-text-grey">

            <router-link
              tag="a"
              :to="{name:'home'}"><--Back to Main Page
            </router-link>
            <router-link
              :to="{name:'login'}"
              tag="a"
            >Login
            </router-link> &nbsp;·&nbsp;
            <a>Sign Up With Google</a> &nbsp;·&nbsp;
            <a href="../">Need Help?</a>
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
    import {required, email, minLength, url, sameAs} from 'vuelidate/lib/validators'
    import {supportedFileType} from '@/helpers/validators.js'

    export default {
        data: () => ({
            form: {
                username: null,
                name: null,
                email: null,
                avatar: null,
                password: null,
                passwordConfirm: null
            }
        }),
        validations: {
            form: {
                username: {required},
                name: {required},
                email: {required, email},
                avatar: {
                    url,
                    supportedFileType
                },
                password: {
                    required,
                    minLength: minLength(6)
                },
                passwordConfirm: {required}
            }

        },
        methods: {
            onFormSubmit() {
                this.$v.form.$touch();
                this.$store.dispatch('registerUsers', this.form);
            }
        }

    }
</script>

<style scoped>
  .hero.is-success {
    background: #F2F6FA;
  }

  .hero .nav, .hero.is-success .nav {
    -webkit-box-shadow: none;
    box-shadow: none;
  }

  .box {
    margin-top: 5rem;
  }

  .avatar {
    margin-top: -70px;
    padding-bottom: 20px;
  }

  .avatar img {
    padding: 5px;
    background: #fff;
    border-radius: 50%;
    -webkit-box-shadow: 0 2px 3px rgba(10, 10, 10, .1), 0 0 0 1px rgba(10, 10, 10, .1);
    box-shadow: 0 2px 3px rgba(10, 10, 10, .1), 0 0 0 1px rgba(10, 10, 10, .1);
  }

  input {
    font-weight: 300;
  }

  p {
    font-weight: 700;
  }

  p.subtitle {
    padding-top: 1rem;
  }
</style>
