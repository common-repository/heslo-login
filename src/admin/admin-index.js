import React, { useEffect, useState }  from 'react';

const Settings = ({ nonce, urls = {} }) => {
  const [secretKey, setSecretKey] = useState('')
  const [clientKey, setClientKey] = useState('')
  const [autoInstallation, setAutoInstallation] = useState('false')
  const [errorMessage, setErrorMessage] = useState('')
  const [successMessage, setSuccessMessage] = useState('')
  const [successAutoInstallMessage, setAutoInstallMessage] = useState('')
  const updateClientKey = (event) => setClientKey(event.target.value)
  const updateSecretKey = (event) => setSecretKey(event.target.value)
  
  const loginCodeSnippet = `[heslo_login]`;

  const updateCall = async () => {
    await fetch(urls.setConfig, {
      body: JSON.stringify({ clientKey, secretKey, autoInstallation  }),
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json',
        'X-WP-Nonce': nonce
      }),
    })
  }
  const updateSettings = async (event) => {
    event.preventDefault()
    try {
      await updateCall();
      setErrorMessage('')
      setSuccessMessage('Settings saved')
    } catch (error) {
      setErrorMessage(error.message);
      setSuccessMessage('');
    }
  }
  const updateAutoIntall = async () => {
    try {
      setAutoInstallMessage(`Auto installation ${autoInstallation === 'true' ? 'enabled' : 'disabled'}`)
      await updateCall();
    } catch (error) {
      setErrorMessage(error.message);
    }
  }

  const getSettings = async () => {
    const response = await fetch(urls.getConfig, {
      headers: new Headers({ 'X-WP-Nonce': nonce })
    })
    const json = await response.json()
    setClientKey(json.value.clientKey);
    setSecretKey(json.value.secretKey);
    setAutoInstallation(json.value.autoInstallation);
  }

  useEffect(() => {
    getSettings()
  }, []);

  const baseUrl = new URL(urls.callback);

  const firstPath = baseUrl.pathname.split('/')[1];
  const suffix = firstPath === 'wp-json' ? '' : `/${firstPath}`;
  return (
    <div>
      <h1>Heslo</h1>
      <h2>Configuring Heslo Login is easy as 1-2-3</h2>
      <ol>
        <li>Create a <b><a href='https://dashboard.getheslo.com?redirect_page=applications' target='_blank'>Heslo account</a></b></li>
        <li>Create a wordpress application. Use <b>{baseUrl.origin}{suffix}</b> when prompted for the base url</li>
        <li>Copy and paste the generated client and secret keys below</li>
      </ol> 
      <form onSubmit={updateSettings}>
        <table className='form-table'>
 
        <tr>
          <th scope='row'>
          <label for="api_key">Api key (required)</label>
            </th>
          <td>
          <input name="api_key" id="api_key" type="text" className='regular-text' autocomplete="off" value={clientKey} onChange={updateClientKey} />
            </td>
           </tr>
        <tr>
          <th scope='row'>
          <label for="secret_key">Secret key (required)</label>
            </th>
          <td>
          <input name="secret_key" id="secret_key" className='regular-text' autocomplete="off" value={secretKey} onChange={updateSecretKey} />
            </td>
           </tr>


        {errorMessage && <div className="error settings-error"><p>{errorMessage}</p></div>}
        {successMessage && <div className="notice notice-success"><p>{successMessage}</p></div>}
        </table>


        <p class="submit">
          <input type="submit" name="submit" id="submit" class="button button-primary" value="Save Changes" />
          </p>

      </form>
      <h2>Auto Installation</h2>
 
      <Checkbox
        title="Automatically add the 'Login with Heslo' to your login page"
        fnChange={checked => { 
          const transformedChecked = checked ? 'true' : 'false'
          setAutoInstallation(transformedChecked);
        }
        }
        checked={autoInstallation === 'true' }
      />

        <p class="submit">
          <input type="submit" name="submit" id="submit" class="button button-primary" value="Save Changes" onClick={updateAutoIntall} />
        </p>

        {successAutoInstallMessage && <div className="notice notice-success"><p>{successAutoInstallMessage}</p></div>}

      <h2>Custom Installation</h2>
      <p>
      <label for="custom_installation">
        <input type="text" name="custom_installation" id="custom_installation" value={loginCodeSnippet} disabled="disabled" class="regular-text" />
       
        <p class="description" id="tagline-description"> Copy & Paste the following code where you want the Heslo button to appear.</p>
        </label>
      </p>
    </div>
  );
}

const Checkbox = ({ fnChange, title = "", checked = false }) => (
  <label>
    <input
      onChange={e => {
        fnChange(e.target.checked);
      }}
      type="checkbox"
      checked={checked}
    />
    {title}
  </label>
);


export default Settings;