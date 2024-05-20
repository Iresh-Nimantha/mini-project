from selenium import webdriver
from selenium.webdriver.common.keys import Keys
import time
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

# Start the web browser
driver = webdriver.Chrome()  # Use appropriate WebDriver for your browser


# Wait for chat popup to be visible
WebDriverWait(driver, 10).until(EC.visibility_of_element_located((By.ID, 'chat-popup')))

# Open the HTML file in the browser
driver.get('../index.html')  # Replace with the actual path to your HTML file

# Find the input field and send a message
input_field = driver.find_element_by_id('user-input')
input_field.send_keys('Hello, how are you?')
input_field.send_keys(Keys.RETURN)  # Press Enter to send the message

# Wait for the bot's response
time.sleep(2)  # Adjust the sleep time as needed to wait for the response
bot_response = driver.find_element_by_id('chat-messages').text
print('Bot:', bot_response)

# Close the browser
driver.quit()
