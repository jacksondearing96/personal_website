from flask import Flask, render_template
import webapp2


app = Flask(__name__, template_folder='templates')


@app.route('/')
def index():
    return render_template('index.html')


@app.route('/sql_visualisation')
def sql_visualisation():
    return render_template('sql_visualisation.html')


if __name__ == '__main__':
    app.run(host="0.0.0.0", debug=True)
