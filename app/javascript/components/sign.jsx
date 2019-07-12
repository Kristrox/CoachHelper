import React from 'react';


const user={
    login: 'user@user.com',
    password: 'PHaslo1234',
  };

  function formatName(user) {
    return user.login + ' ' + user.password;
  }

class Sign extends React.Component {

  render(){
      return(
        <div class="background-whole">
          <h1>Login {formatName(user)}</h1>

          <form>
              <label>
                Login:
                <br/>
                <input type="text" name="login" />
              </label>
              <br/>
              <input type="submit" value="Submit" />
              <br/>
              <label>
                <br/>
                Password:
                <br/>
                <input type="text" name="password" />
                <br/>
              </label>
              <input type="submit" value="Submit" />
          </form>
        </div>
      )
  }
}
export default Sign
/*
%#<h2>Log in</h2>

<%= form_for(resource, as: resource_name, url: session_path(resource_name)) do |f| %>
  <div class="field">
    <%= f.label :email %><br />
    <%= f.email_field :email, autofocus: true, autocomplete: "email" %>
  </div>

  <div class="field">
    <%= f.label :password %><br />
    <%= f.password_field :password, autocomplete: "current-password" %>
  </div>

  <% if devise_mapping.rememberable? %>
    <div class="field">
      <%= f.check_box :remember_me %>
      <%= f.label :remember_me %>
    </div>
  <% end %>

  <div class="actions">
    <%= f.submit "Log in" %>
  </div>
<% end %>

<%= render "devise/shared/links" %> 
#%*/
