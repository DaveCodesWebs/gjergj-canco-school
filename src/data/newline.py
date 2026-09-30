import json

input_file = "staff_updated (1).json"
output_file = "staff_updated (1).json"

with open(input_file, "r", encoding="utf-8") as f:
    data = json.load(f)

def update_bios(obj):
    if isinstance(obj, dict):
        for key, value in obj.items():
            if key == "bio" and isinstance(value, str):
                obj[key] = value.replace("\n", "\n\n")
            else:
                update_bios(value)
    elif isinstance(obj, list):
        for item in obj:
            update_bios(item)

update_bios(data)

with open(output_file, "w", encoding="utf-8") as f:
    json.dump(data, f, ensure_ascii=False, indent=2)
    f.write("\n")

print("Done.")