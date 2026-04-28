import urllib.request
import json
import base64

url = "https://api-inference.huggingface.co/models/Salesforce/blip-image-captioning-base"
headers = {"Content-Type": "application/json"}
# Use a tiny 1x1 black pixel image in base64
img_b64 = "iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNk+A8AAQUBAScY42YAAAAASUVORK5CYII="

data = json.dumps({"inputs": img_b64}).encode("utf-8")
req = urllib.request.Request(url, data=data, headers=headers)

try:
    with urllib.request.urlopen(req) as response:
        print(response.read().decode())
except Exception as e:
    print("Error:", e.read().decode() if hasattr(e, 'read') else str(e))
