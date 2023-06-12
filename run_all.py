import os

# Get the current directory
current_directory = os.getcwd()

# Iterate through all files in the directory
for filename in os.listdir(current_directory):
    if filename.endswith(".py"):
        # Execute each Python file
        os.system(f"python {filename}")
