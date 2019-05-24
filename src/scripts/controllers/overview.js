
import * as overviewView from '../views/overviewView.js';

if (document.querySelector('body').className === 'overview') {
  overviewView.randomData();
  overviewView.displayMonth();
  overviewView.displayValue();
  overviewView.displayDoughnut();
  overviewView.percentageTotal();
}
