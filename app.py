from flask import Flask, request, render_template, send_file, redirect
from pytube import YouTube

app = Flask(__name__, static_folder='static', static_url_path='/static')

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/descargar', methods=['POST'])
def descargar_video():
    enlace = request.form['enlace']

    # Detectar si la solicitud proviene de un dispositivo móvil
    user_agent = request.headers.get('User-Agent')
    is_mobile = "Mobile" in user_agent or "Android" in user_agent

    try:
        yt = YouTube(enlace)
        stream = yt.streams.get_highest_resolution()
        video_descargado = stream.download()

        if is_mobile:
            # Si es un dispositivo móvil, redirigir al usuario a la descarga directa del video
            return redirect("/descarga-movil")  # Cambia la URL según tus necesidades
        else:
            # Si no es un dispositivo móvil, enviar el video como archivo adjunto para descarga
            return send_file(video_descargado, as_attachment=True, download_name=f"{yt.title}.mp4")
    except Exception as e:
        return f"Error al descargar el video: {str(e)}"

@app.route('/descarga-movil')
def descarga_movil():
    # Aquí puedes mostrar información sobre los ajustes de descarga para dispositivos móviles
    return "Información sobre los ajustes de descarga para dispositivos móviles."

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)
