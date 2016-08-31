import bpy


bpy.ops.anim.change_frame(frame = _frame_numero)
bpy.data.textures["texture_boca"].image_user.frame_offset = _offset_index;
bpy.data.textures["texture_boca"].keyframe_insert(data_path='image_user.frame_offset')
