<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\OurTeamsInformation;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Log;

class OurTeamsInformationController extends Controller
{
    // 📥 Index: List all team members
    public function index()
    {
        $teams = OurTeamsInformation::all();
        return response()->json($teams);
    }

    // 📝 Store: Create a new team member
    public function store(Request $request)
    {
        $validated = $request->validate([
            'name'          => 'required|string|max:255',
            'position'      => 'required|string|max:255',
            'qualification' => 'nullable|string|max:255',
            'experience'    => 'nullable|string|max:255',
            'facebook_link' => 'nullable|url',
            'whatsapp_link' => 'nullable|string|max:20',
            'phone_number'  => 'nullable|string|max:20',
            'instagram_link'=> 'nullable|url',
            'image'         => 'nullable|image|mimes:jpg,jpeg,png,webp|max:2048',
        ]);

        // Handle image upload
        if ($request->hasFile('image')) {
            $path = $request->file('image')->store('team_images', 'public');
            $validated['image'] = $path;
        }

        $team = OurTeamsInformation::create($validated);
        return response()->json($team, 201);
    }

    // ✏️ Update: Update an existing team member
    public function update(Request $request, $id)
    {
        Log::info('Updating team member with ID: ' . $id);
        Log::info('Request Data:', $request->all());

        $team = OurTeamsInformation::findOrFail($id);

        $validated = $request->validate([
            'name'          => 'sometimes|required|string|max:255',
            'position'      => 'sometimes|required|string|max:255',
            'qualification' => 'nullable|string|max:255',
            'experience'    => 'nullable|string|max:255',
            'facebook_link' => 'nullable|url',
            'whatsapp_link' => 'nullable|string|max:20',
            'phone_number'  => 'nullable|string|max:20',
            'instagram_link'=> 'nullable|url',
            'image'         => 'nullable|image|mimes:jpg,jpeg,png,webp|max:2048',
        ]);

        // Handle new image upload
        if ($request->hasFile('image')) {
            // Delete old image if exists
            if ($team->image && Storage::disk('public')->exists($team->image)) {
                Storage::disk('public')->delete($team->image);
            }

            $path = $request->file('image')->store('team_images', 'public');
            $validated['image'] = $path;
        }

        $team->update($validated);
        return response()->json($team);
    }

    // ❌ Destroy: Delete a team member
    public function destroy($id)
    {
        $team = OurTeamsInformation::findOrFail($id);

        // Delete image if exists
        if ($team->image && Storage::disk('public')->exists($team->image)) {
            Storage::disk('public')->delete($team->image);
        }

        $team->delete();
        return response()->json(['message' => 'Team member deleted successfully']);
    }
}