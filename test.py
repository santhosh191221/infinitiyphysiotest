import cv2
import os
from PIL import Image

# Define the video path
video_path = "C:\\Users\\SANTHOSH\\Downloads\\WhatsApp Video 2025-09-04 at 11.15.16 AM.mp4"

# Create a folder to save extracted frames
output_folder = "extracted_frames"
os.makedirs(output_folder, exist_ok=True)

# Capture video
cap = cv2.VideoCapture(video_path)
frame_rate = cap.get(cv2.CAP_PROP_FPS)

frame_count = 0
saved_frames = []

# Extract frames at 1-second intervals
while cap.isOpened():
    frame_id = int(cap.get(1))  # current frame number
    ret, frame = cap.read()
    if not ret:
        break

    # Save frame every 1 second
    if frame_id % int(frame_rate) == 0:
        frame_filename = os.path.join(output_folder, f"frame_{frame_count}.jpg")
        cv2.imwrite(frame_filename, frame)
        saved_frames.append(frame_filename)
        frame_count += 1

cap.release()

# Return only first 5 frames for preview
saved_frames[:5]
