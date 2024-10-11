from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.common.exceptions import NoSuchElementException
from selenium.webdriver.chrome.options import Options
import os

import time
import unittest
# cicd
url = "http://localhost:4173"
# local
url = "http://localhost:5173"
chrome_options = Options()
chrome_options.add_argument("--headless")  # Run in headless mode
chrome_options.add_argument("--no-sandbox")  # Bypass OS security model
chrome_options.add_argument("--disable-dev-shm-usage")  # Overcome limited resource problems
chrome_options.add_argument("--disable-gpu")  # Applicable for headless mode to disable GPU




class TestAboutUsNavigation(unittest.TestCase):

    def setUp(self):
        # Set up the WebDriver (assuming Chrome, can be changed as needed)
        # chrome_options = Options()
        # chrome_options.add_argument("--headless")
        # chrome_options.add_argument("--no-sandbox")  # Bypass OS security model, required for running in GitHub Actions
        # chrome_options.add_argument("--disable-dev-shm-usage")  # Overcome limited resource problems
        self.driver = webdriver.Chrome(options=chrome_options)
        # Open the website URL
        # self.driver = webdriver.Chrome()
        self.driver.get(url)  

    def testAboutUsNavigation(self):
        driver = self.driver
        
        about_us_button = driver.find_element(By.XPATH, "//a[contains(text(),'About Us')]") 
        about_us_button.click()
        time.sleep(1)  

        try:
            about_element = driver.find_element(By.ID, "about-us")
            
            self.assertEqual(about_element.text, "About Us", "The 'About Us' text is not found")
        except NoSuchElementException:
            self.fail("The 'About Us' page is missing the element with the ID - `about-us`")


    def tearDown(self):
        # Close the browser window after the test case is completed
        self.driver.quit()

class TestURLs(unittest.TestCase):

    def setUp(self):
        # chrome_options = Options()
        # chrome_options.add_argument("--headless")
        # chrome_options.add_argument("--no-sandbox")  # Bypass OS security model, required for running in GitHub Actions
        # chrome_options.add_argument("--disable-dev-shm-usage")  # Overcome limited resource problems
        self.driver = webdriver.Chrome(options=chrome_options)
        # Set up the WebDriver (assuming Chrome, can be changed as needed)
        # self.driver = webdriver.Chrome()
        # Open the website URL
        # self.driver = webdriver.Chrome()
        self.driver.get(url) 
    
    def testAboutUsURL(self):
        driver = self.driver

        about_us_button = driver.find_element(By.XPATH, "//a[contains(text(),'About Us')]") 
        about_us_button.click()
        time.sleep(1)  

        # Check if the URL is correct
        expected_url = f"{url}/aboutus"  
        self.assertEqual(driver.current_url, expected_url, "The 'About Us' page URL is not as expected.")

    def testCareersURL(self):
        driver = self.driver

        careers_button = driver.find_element(By.XPATH, "//a[contains(text(),'Careers')]")
        careers_button.click()
        time.sleep(1)  

        # Check if the URL is correct
        expected_url = "https://think.recruit41.com/"  
        self.assertEqual(driver.current_url, expected_url, "The 'Careers' page URL is not as expected.")
    
    def testContactUsURL(self):
        driver = self.driver

        contact_us_button = driver.find_element(By.XPATH, "//a[contains(text(),'Contact Us')]")
        contact_us_button.click()
        time.sleep(1)  

        # Check if the URL is correct
        expected_url = "https://docs.google.com/forms/d/e/1FAIpQLSfjpiTMbXlbpgYOCTlC1TqNJruwST8lFiKF-9kbW6H3cKGrcw/viewform"  
        self.assertEqual(driver.current_url, expected_url, "The 'Contact Us' page URL is not as expected.")


    def tearDown(self):
        # Close the browser window after the test case is completed
        self.driver.quit()

def test():
    unittest.main()

if __name__ == "__main__":
    unittest.main()
