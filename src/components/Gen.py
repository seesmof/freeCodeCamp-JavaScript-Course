import g4f
import os


def gpt4free(input_text):
    response = g4f.ChatCompletion.create(
        model=g4f.Model.gpt_35_turbo,
        messages=[{
            "role": "user",
            "content": input_text
        }],
        provider=g4f.Provider.DeepAi
    )
    return response


# Generate the message
message = gpt4free(
    "Generate a nice greeting to a nice person called John. Make sure the message is creative and don't use any fillers, just write it from your name, from first person.")
print(message)

# Write the message to a file
file_name = "message.md"
local_dir = "./"
file_path = os.path.join(local_dir, file_name)

with open(file_path, "a", encoding="utf-8") as f:
    f.write(message)
    f.close()
